const Response = require('../http_response/response');

module.exports = (_, res, next) => {
  res.format = (payload) => res.send(Response.json(payload));
  next();
};
