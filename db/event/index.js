const users = require('./users');
const sets = require('./sets');
const items = require('./items');

module.exports = { ...users, ...sets, ...items };
