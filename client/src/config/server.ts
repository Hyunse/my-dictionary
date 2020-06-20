export default {
  'env': process.env.REACT_APP_NODE_ENV,
  'development': {
    port: 5000,
    url: 'localhost'
  },
  'production' : {
    port: process.env.REACT_APP_API_PORT,
    url: process.env.REACT_APP_API_URL
  }
}