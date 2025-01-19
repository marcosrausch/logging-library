import * as winston from 'winston';

const everyLog = new winston.transports.File({
    filename: 'logs/every.log',
    level: 'info',
    options: { flags: 'w' }
});

const errorLog = new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    options: { flags: 'w' }
});

const consoleLog = new winston.transports.Console({
    format: winston.format.simple()
});

const fmt: winston.Logform.Format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json({ space: 2 })
);

export const log: winston.Logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: fmt,
    transports: [ everyLog, errorLog ]
});

if (process.env.NODE_ENV !== 'production') {
    log.add(consoleLog);
}

module.exports = {
    log: log
}