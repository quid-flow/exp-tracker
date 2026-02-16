const pool = require("../config/dbconfig");
const {
  successresponse,
  failureresponse,
  servererrorresponse,
} = require("../utils/response-helper");


const getBalance = async(req, res) =>{
    try{
        const userid = req.user.userid;

        const {rows} = await pool.query(
            "select * from sp_get_balance($1::uuid)",
            [userid]
        );

        if(!rows || rows.length === 0){
            return successresponse(res, 1, "No Transaction Found !", { transactions:[]});
        }

        if(rows[0].rtncode === 0){
            return failureresponse(res, rows[0].rtncode, rows[0].rtnmsg);
        }


        const balance = rows.map(row =>({
            // total_income: row.total_income,
            // total_expense: row.total_expense,
            balance: row.balance
        }));


        return successresponse(
            res,
            1,
            "Balance Loaded !",
            {balance} 
        );

    }
    catch (error){
        console.error("Error in get Transaction:", error);
        return servererrorresponse(res, error.message);
        
    }
}

module.exports = {
    getBalance
}

