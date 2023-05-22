import Sequelize from "sequelize";

const connection = new Sequelize(
    'foodreview',
    'foodreview',
    'foodreview',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

export default connection;