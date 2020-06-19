// .env file
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, './.env') });

import app from './app';
import models from './models';

const port = process.env.PORT || 5000;

models.sequelize.sync().then(() => {
  app.listen(port, (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
  });
});
