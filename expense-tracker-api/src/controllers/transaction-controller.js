const pool = require("../config/dbconfig");
const {
  successresponse,
  failureresponse,
  servererrorresponse,
} = require("../utils/response-helper");


const gettxn = async(req, res) =>{
    try{
        const userid = req.user.userid;

        const {rows} = await pool.query(
            "select * from sp_get_txn($1)",
            [userid]
        );

        if(!rows || rows.length === 0){
            return successresponse(res, 1, "No Transaction Found !", { transactions:[]});
        }

        if(rows[0].rtncode === 0){
            return failureresponse(res, rows[0].rtncode, rows[0].rtnmsg);
        }


        const transactions = rows.map(row =>({
            transactionid: row.transactionid,
            categoryid: row.categoryid,
            categorytype: row.categorytype,
            amount: row.amount,
            txndate: row.txn_date,
            note: row.note,
            created_on: row.created_on
        }));


        return successresponse(
            res,
            1,
            "Transaction List Loaded !",
            {transactions}
        );

    }
    catch (error){
        console.error("Error in get Transaction:", error);
        return servererrorresponse(res, error.message);
        
    }
}


const addtxn = async (req, res) =>{
  try {
    const userid = req.user.userid;
    const { categoryid, categorytype, txn_date, amount, note } = req.body;

    if (!categoryid || categorytype === undefined || !txn_date || !amount) {
      return failureresponse(res, 0, "Missing Required Fields !");
    }

    const { rows } = await pool.query(
      "select * from sp_add_txn($1, $2, $3, $4, $5, $6)",
      [userid, categoryid, Number(categorytype), txn_date, amount, note]
    );

    if (!rows || rows.length === 0) {
      return failureresponse(res, 0, "Error while Adding Transaction !");
    }

    const result = rows[0];

    if (result.rtncode === 1) {
      return successresponse(
        res,
        1,
        result.rtnmsg,
        { transactionid: result.transactionid }
      );
    } else {
      return failureresponse(res, result.rtncode, result.rtnmsg);
    }

  } catch (error) {
    console.error("Add Txn Error:", error);
    return servererrorresponse(res, error.message);
  }
};




module.exports = {
  gettxn,
  addtxn
};
