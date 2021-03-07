/* eslint global-require: 0 */
switch (process.env.NODE_ENV) {
    case 'production':
        module.exports = require('./config/webpack.prod');
        break;
    case 'development':
    default:
        module.exports = require('./config/webpack.dev');
}
