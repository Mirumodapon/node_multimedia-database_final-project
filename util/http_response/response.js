const statusCodeMessage = require('./statusCodeTable');

const json = ({ err, code, msg, result }) => {
  if (!err)
    return {
      code,
      status: statusCodeMessage(code),
      msg,
      result
    };
  else
    return {
      code,
      status: statusCodeMessage(code),
      err
    };
};

const Response = {
  json
};

module.exports = Response;
