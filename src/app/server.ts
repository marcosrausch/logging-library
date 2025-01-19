import * as dotenv from 'dotenv';

const load: dotenv.DotenvConfigOutput = dotenv.config();

if (load.error) {
    console.log(`There was an error loading environment variables, aborting...`);
    process.exit(1);
}

import * as core from 'express-serve-static-core';
import * as express from 'express';
import { root } from '../handlers/root';
import { log } from '../logger';

function startServerLog(): void {
    log.info(`HTTP REST API Server running at http://localhost:${PORT}`);
}

function getPort(): number {
    const portString: string = process.env.PORT;
    let port: number = parseInt(portString, 10);

    if (!port || isNaN(port)) {
        port = 8080;
    }

    return port;
}

const app: core.Express = express();
const PORT: number = getPort();

function setup(): void {
    app.route("/").get(root);
}

function start(): void {
    app.listen(PORT, startServerLog);
}

setup();
start();

module.exports = {
    getPort: getPort
}
