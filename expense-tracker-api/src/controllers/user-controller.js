const { Result } = require("pg");
const pool = require("../config/dbconfig");
const jwt = require("../utils/jwt");
const {
    successresponse,
    failureresponse,
    servererrorresponse,
} = require("../utils/response-helper");


// CHANGE PASSWORD { JWT granted }
const changePassword = async (req, res) => {
    try {   
        const userid = req.user.userid;
        const { oldpassword, newpassword } = req.body;

        if (!oldpassword || !newpassword) {
            return failureresponse(res, 0, "Invalid input");
        }

        if (oldpassword === newpassword) {
            return failureresponse(res, 0, "New password cannot be same as old password");
        }
        const { rows } = await pool.query(
            "SELECT * FROM SP_USER_CHANGE_PASSWORD($1,$2,$3)",
            [userid, oldpassword, newpassword]
        );

        const Result = rows[0];

        if (Result.rtncode === 0) {
            return failureresponse(res, Result.rtncode, Result.rtnmsg);
        }
        else {
            return successresponse(res, 1, "Password changed successfully");
        }
    }
    catch (error) {
        console.error("Error changing password:", error);
        return servererrorresponse(res, 0, "Internal server error");
    }
};

module.exports = {
    changePassword
};    