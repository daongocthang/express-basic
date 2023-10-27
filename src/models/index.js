import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.config';
import Todo from './todo.model';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    timezone: dbConfig.timezone,
    pool: dbConfig.pool,
    operatorsAliases: false,
});

export default { sequelize, Todo };
