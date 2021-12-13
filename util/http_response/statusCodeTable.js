module.exports = (status) => {
  switch (status) {
  case 200:
    return 'OK';
  case 201:
    return 'created';
  case 202:
    return 'Accepted';
  case 203:
    return 'Non-Authoritative Information';
  case 204:
    return 'No Content';
  case 205:
    return '205 Reset Content';
  case 300:
    return 'Multiple Choice';
  case 301:
    return 'Moved Permanently';
  case 302:
    return 'Found';
  case 303:
    return 'See Other';
  case 304:
    return 'Not Modified';
  case 400:
    return 'Bad Request';
  case 401:
    return 'Unauthorized';
  case 402:
    return 'Payment Required';
  case 403:
    return 'Forbidden';
  case 404:
    return 'Not Found';
  case 405:
    return 'Method Not Allowed';
  case 406:
    return 'Not Acceptable';
  case 407:
    return 'Proxy Authentication Required';
  case 408:
    return 'Request Timeout';
  case 418:
    return 'I\'m a teapot';
  case 500:
    return 'Internal Server Error';
  case 501:
    return 'Not Implemented';
  }
};
