import * as core from 'express-serve-static-core';
import * as express from 'express';
import { root } from '../handlers/root';

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

function startServerLog(): void {
    console.log(`HTTP REST API Server running at http://localhost:${PORT}`);
}

function getPort(): number {
    const portString: string = process.env.PORT;
    let port: number = parseInt(portString, 10);

    if (!port || isNaN(port)) {
        port = 8080;
    }

    return port;
}

module.exports = {
    getPort: getPort
}
