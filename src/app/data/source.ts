import { DataSource, DataSourceOptions } from "typeorm";
import { Lesson } from "./models/lesson";
import { Course } from "./models/course";
const env = require('../load');

const PORT: number = env.getPort();

const options: DataSourceOptions = {
    type: 'postgres',
    url: 'postgresql://postgres:mrausch91@localhost:5432/postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: PORT,
    database: process.env.DB_NAME,
    entities: [ Course, Lesson ],
    synchronize: true,
    logging: true
}

export const dataSource: DataSource = new DataSource(options);
