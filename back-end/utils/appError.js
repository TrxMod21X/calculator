const appError = (message, statusCode) => {
  let error = new Error(message);
  error.stack = error.stack;
  error.statusCode = error.statusCode ?? 500;
  return error;
};

module.exports = appError;
