import 'reflect-metadata';
import { dataSource } from './data/source';
const load = require('./load');

load.env();

import * as core from 'express-serve-static-core';
import * as express from 'express';
import { root } from '../handlers/root';
import { log } from '../logger';

const app: core.Express = express();
const PORT: number = load.getPort();

function setup(): void {
    app.route("/").get(root);
}

function start(): void {
    app.listen(PORT, load.startServerLog(PORT));
}

dataSource.initialize().
    then(() => {
        log.info(`Data source has been initialized successfully`);
        setup();
        start();
    }).
    catch(err => {
        log.error(`Data source initialization failed due to: ${err}`);
        process.exit(1);
    });

