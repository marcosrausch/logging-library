const load = require('./load');

describe('server tests', runLoaderSpecs);

function runLoaderSpecs(): void {
    shouldGetPortFromEnv();
    shouldReturnDefaultPort();
}

function shouldGetPortFromEnv(): void {    
    it('should return port from environment variable', getPortFromEnv)
}

function getPortFromEnv(): void {
    process.env.PORT = '9001';
    const portEnv: string = process.env.PORT;
    const expected: number = parseInt(portEnv, 10);
    const actual: number = load.getPort();
    
    expect(actual).toBe(expected);
}

function shouldReturnDefaultPort(): void {    
    it('should return default port when port variable is unaccessible', getDefaultPort)
}

function getDefaultPort(): void {
    process.env.PORT = null;
    const expected: number = 8081;
    const actual: number = load.getPort();
    
    expect(actual).toBe(expected);
}