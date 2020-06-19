import Sequelize from 'sequelize';
import DBConfig from '../config/config_db';

const env = DBConfig.env || 'development';

// Init Sequelize
const sequelize = new Sequelize(
  DBConfig[env].database || '',
  DBConfig[env].user || '',
  DBConfig[env].password || '',
  {
    dialect: 'postgres',
    timezone: 'utc',
    operatorsAliases: false
  }
);


// Add Models
// When you add new Models, put model path here!
const models = {
  user: sequelize.import('./Users'),
  vocabulary: sequelize.import('./Vocabulary'),
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
