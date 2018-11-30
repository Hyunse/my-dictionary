import Sequelize from 'sequelize';
import DBConfig from '../config/config_db';

// Init 
const sequelize = new Sequelize(
  DBConfig.dev.database || '',
  DBConfig.dev.user || '',
  DBConfig.dev.password || '',
  {
    dialect: 'postgres',
    timezone: 'utc',
    operatorsAliases: false
  }
);

// Add Models
const models = {
  user: sequelize.import('./users'),
  sequelize,
  Sequelize
};

// Association
Object.keys(models).forEach((modelName) => {
  if (modelName) {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
