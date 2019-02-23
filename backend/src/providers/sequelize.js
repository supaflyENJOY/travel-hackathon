import * as Sequelize from 'sequelize'

const dbName = process.env.DB_NAME;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export default new Sequelize(dbName, userName, password, {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
