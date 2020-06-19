export default {
  env: process.env.NODE_ENV,
  development: {
    host: 'localhost', // 'localhost' is the default;
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  production: {
    host: process.env.DB_HOST_PRO,
    port: process.env.DB_PORT_PRO,
    database: process.env.DB_NAME_PRO,
    user: process.env.DB_USER_PRO,
    password: process.env.DB_PASSWORD_PRO,
  }
};
