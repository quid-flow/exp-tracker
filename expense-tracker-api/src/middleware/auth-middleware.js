const jwt = require("../utils/jwt");
const { failureresponse } = require("../utils/response-helper");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    // token missing
    if (!authHeader) {
      return failureresponse(res, 0, "Authorization token missing");
    }

    // Bearer token check
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return failureresponse(res, 0, "Invalid token format");
    }

    const token = parts[1];

    // verify token
    const decoded = jwt.verifyToken(token);

    // attach user data to request
    req.user = {
      userid: decoded.userid,
      emailid: decoded.emailid,
      firstname: decoded.firstname,
      lastname: decoded.lastname
    };

    console.log("DECODED TOKEN =", decoded);

    next(); // controller ko allow
  } catch (error) {
    return failureresponse(res, 0, "Unauthorized or token expired");
  }
};

module.exports = authMiddleware;
