import * as core from 'express-serve-static-core';
import * as express from 'express';
import { root } from './handlers/root';

const app: core.Express = express();

function setup(): void {
    app.route("/").get(root);
}

function start(): void {
    app.listen(8080, startServerLog);
}

setup();
start();

function startServerLog(): void {
    console.log(`HTTP REST API Server running at http://localhost:8080`);
}