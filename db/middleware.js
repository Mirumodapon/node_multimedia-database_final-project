const db = require('./');
const event = require('./event');

module.exports = (req, _, next) => {
  req.db = new db.poolConnect();
  req.dbEvent = event;
  next();
};
