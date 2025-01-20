import * as dotenv from 'dotenv';
import { log } from '../logger';

const load: dotenv.DotenvConfigOutput = dotenv.config();

function envCheck(): void {
    if (load.error) {
        console.log(`There was an error loading environment variables, aborting...`);
        process.exit(1);
    } else {
        console.log(`Environment variables loaded successfully`);
    }
}

function getPort(): number {
    const portString: string = process.env.PORT;
    let port: number = parseInt(portString, 10);

    if (!port || isNaN(port)) {
        port = 8081;
    }

    return port;
}

function startServerLog(port: number): void {
    log.info(`HTTP REST API Server running at http://localhost:${port}`);
}

module.exports = {
    env: envCheck,
    getPort: getPort,
    startServerLog: startServerLog
}