const config = require('./webpack/config');
config.node = {fs : 'empty'};
module.exports = config;
