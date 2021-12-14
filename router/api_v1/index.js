const Router = require('express').Router();

Router.use('/users', require('./users'));

module.exports = Router;
