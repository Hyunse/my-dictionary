export default {
  env: process.env.REACT_APP_NODE_ENV,
  development: {
    url: 'localhost:5000',
  },
  production: {
    port: process.env.REACT_APP_API_PORT,
    url: process.env.REACT_APP_API_URL,
  },
};