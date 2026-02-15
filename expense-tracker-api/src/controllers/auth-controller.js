const pool = require("../config/dbconfig");
const jwt = require("../utils/jwt");
const {
  successresponse,
  failureresponse,
  servererrorresponse,
} = require("../utils/response-helper");



// SIGNUP -- { EMIALID , PASSWORD , FIRST NAME , LAST NAME , GENDER } 
 const userSignup = async (req, res) => {
  try {
    const { emailid, password, firstname, lastname, gender } = req.body;

    // basic validation check
    if (!emailid || !password || !firstname || !lastname || gender === undefined) {
      return failureresponse(res, 0, "Invalid input");
    }

    // Else Call the Stored Procedure
    const { rows } = await pool.query(
      "SELECT * FROM SP_AUTH_SIGNUP($1,$2,$3,$4,$5)",
      [emailid, password, firstname, lastname, gender]
    );

    const result = rows[0];

    if (result.rtncode === 1) {
      return successresponse(res, result.rtncode, result.rtnmsg);
    } 
    else {
      return failureresponse(res, result.rtncode, result.rtnmsg);
    }
  } catch (error) {
    return servererrorresponse(res, error);
  }
};


// SIGNUP -- { EMAILID , OTP } 
const verifySignupOtp = async (req, res) => {
    try{
        const { emailid, otp } = req.body;

        // basic validation check
        if(!emailid || !otp){
            return failureresponse(res, 0, "Invalid OTP input");
        }

        // Else Call the Stored Procedure
        const { rows } = await pool.query(
            "SELECT * FROM SP_AUTH_VERIFY_SIGNUP_OTP($1,$2)",
            [emailid, otp]
        );

        const result = rows[0];

        if(result.rtncode === 1){
            return successresponse(res, result.rtncode, result.rtnmsg);
        }
        else{
            return failureresponse(res, result.rtncode, result.rtnmsg);
        }
    }catch(error){
        return servererrorresponse(res, error);
    }
};


// VERIFY LOGIN -- { EMAILID, PASSWORD }
const userLogin  = async (req, res) =>{
    try{
        const {emailid, password} = req.body;

        // basic validation check
        if (!emailid || !password) {
            return failureresponse(res, 0, "Invalid login input");
        }

        // Else Call the Stored Procedure
        const {rows} = await pool.query(
            "select * from sp_auth_login($1,$2)",
            [emailid,password]
        );

        const result = rows[0];

        if(result.rtncode !== 1){
            return failureresponse(res, result.rtncode, result.rtnmsg);
        }

        const token = jwt.generateToken({
            
            userid: result.userid, // from result rtn table 
            emailid: result.emailid,
            firstname: result.firstname,
            lastname: result.lastname
        });
        console.log("JWT PAYLOAD =", jwt.verifyToken(token));

        return successresponse(res, result.rtncode, result.rtnmsg, { token });

    }catch (error) {
    console.error("LOGIN ERROR:", error);
    return servererrorresponse(res, 0, error.message);
}
};


const forgetPasword = async (req ,res) =>{
    try{
        const { emailid } = req.body;
        if(!emailid){
            return failureresponse(res, 0, "Invalid input");
        }

        const { rows } = await pool.query(
            "SELECT * FROM Sp_auth_forget_password($1)",
            [emailid]
        );

        const result = rows[0];

        if (result.rtncode === 1) {
            return successresponse(res, result.rtncode, result.rtnmsg);
        }
        else {
            return failureresponse(res, result.rtncode, result.rtnmsg);
        }
    } catch (error) {
        return servererrorresponse(res, error);
    }
};


const verifyResetOtp = async (req, res) =>{
    try{
        const { emailid, otp} = req.body;

        // basic validation check
        if(!emailid || !otp){
            return failureresponse(res, 0, "Invalid OTP input");
        }

        const { rows } = await pool.query(
            "SELECT * FROM Sp_auth_verify_reset_otp($1,$2)",
            [emailid, otp]
        );

        const result = rows[0];

        if (result.rtncode === 1) {
            return successresponse(res, result.rtncode, result.rtnmsg);
        }
        else {
            return failureresponse(res, result.rtncode, result.rtnmsg);
        }
    } catch (error) {
        return servererrorresponse(res, error);
    }
}

const ResetPassword = async (req, res) =>{
    try{
        const { emailid, password} = req.body;

        // basic validation check
        if(!emailid || !password){
            return failureresponse(res, 0, "Invalid input");
        }

        const { rows } = await pool.query(
            "SELECT * FROM Sp_auth_reset_password($1,$2)",
            [emailid, password]
        );
        const result = rows[0];

        if (result.rtncode === 1) {
            return successresponse(res, result.rtncode, result.rtnmsg);
        }
        else {
            return failureresponse(res, result.rtncode, result.rtnmsg);
        }
    } catch (error) {
        return servererrorresponse(res, error);
    }  
};    




module.exports = {
  userSignup,
  verifySignupOtp,
  userLogin,
  forgetPasword,
  verifyResetOtp,
  ResetPassword
};
