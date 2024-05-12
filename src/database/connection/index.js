import mysql from 'mysql2/promise';
import 'dotenv/config';

export const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_SCHEMA
});