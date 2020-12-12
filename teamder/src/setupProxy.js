const { createProxyMiddleware } = require('http-proxy-middleware');
// import SERVER_URL from './utils/constants';
// const SERVER_URL = require('./utils/constants')
module.exports = function(app) {
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: "http://localhost:5000"
    })
  );
  app.use(
    '/auth/github',
    createProxyMiddleware({
      target: "http://localhost:5000"
    })
  );
};