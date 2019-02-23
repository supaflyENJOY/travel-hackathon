import * as Sequelize from 'sequelize'
import config from '../utils/config';

export default new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
    host: config.DB_HOSTNAME,
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
