import { log } from '../../logger';

export function success(): void {
    log.info(`Data source has been initialized successfully`);
}

export function failure(err: Error): void {
    log.error(`Data source initialization failed due to: ${err}`);
    process.exit(1);
}