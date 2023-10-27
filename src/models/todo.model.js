import { DataTypes } from 'sequelize';

export default (sequelize) =>
    sequelize.define('todos', {
        title: DataTypes.STRING(255),
        description: DataTypes.TEXT,
        completed: DataTypes.BOOLEAN,
    });
