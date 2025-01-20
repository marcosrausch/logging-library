const load = require('./load');
const source = require('./data/source');

load.env();

import * as core from 'express-serve-static-core';
import * as express from 'express';
import { root } from '../handlers/root'; 

const app: core.Express = express();
const PORT: number = load.getPort();

function setup(): void {
    app.route("/").get(root);
}

function start(): void {
    app.listen(PORT, load.startServerLog(PORT));
}

source.data.initialize().
    then(() => {
        source.success();
        setup();
        start();
    }).
    catch(err => source.init.failure(err))

