export default {
  env: process.env.REACT_APP_NODE_ENV,
  development: {
    url: 'http://localhost:5000',
  },
  production: {
    port: process.env.REACT_APP_API_PORT,
    // url: `https://${process.env.REACT_APP_API_URL}`,
    url: 'http://localhost:5000',
  },
};