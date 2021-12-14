const db = require('./');

module.exports = (req, _, next) => {
  req.db = new db.poolConnect();
  next();
};
