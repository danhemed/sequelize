import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize('sequelize_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
});

export const UserActivity = sequelize.define('UserActivity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
