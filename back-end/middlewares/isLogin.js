const appError = require("../utils/appError");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  const token = getTokenFromHeader(req);
  const decodedUser = verifyToken(token);

  req.user = decodedUser.id;

  if (!decodedUser || req.session.userAuth !== token) {
    return next(appError("Invalid/Expired Token, Please login again", 401));
  }

  next();
};

module.exports = isLogin;
