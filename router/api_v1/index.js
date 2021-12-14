const Router = require('express').Router();

Router.use('/users', require('./users'));
Router.use('/sets', require('./sets'));

module.exports = Router;
