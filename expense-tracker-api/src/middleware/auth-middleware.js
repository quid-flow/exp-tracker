const jwt = require("../utils/jwt");
const { failureresponse } = require("../utils/response-helper");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    // ❌ No token
    if (!authHeader) {
      return failureresponse(res, 401, "Authorization token missing");
    }

    // ❌ Invalid format
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return failureresponse(res, 401, "Invalid token format");
    }

    const token = parts[1];

    // ✅ Verify
    const decoded = jwt.verifyToken(token);

    req.user = {
      userid: decoded.userid,
      emailid: decoded.emailid,
      firstname: decoded.firstname,
      lastname: decoded.lastname
    };

    console.log("decoded:", decoded);

    next();

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return failureresponse(res, 401, "Token expired");
    }

    return failureresponse(res, 401, "Invalid token");
  }
};

module.exports = authMiddleware;