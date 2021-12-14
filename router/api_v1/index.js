const Router = require('express').Router();

Router.use('/users', require('./users'));
Router.use('/sets', require('./sets'));
Router.use('/items', require('./items'));

module.exports = Router;
