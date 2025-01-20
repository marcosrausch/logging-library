import { DataSource } from "typeorm";
const env = require('../load');
const init = require('./init');

const PORT: number = env.getPort();

const dataSource: DataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: PORT,
    database: process.env.DB_NAME,
    entities: [],
    logging: true
});

module.exports = {
    data: dataSource,
    success: init.success(),
    failure: init.failure()
}