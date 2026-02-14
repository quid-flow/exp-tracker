const pool = require("../config/dbconfig");
const {
  successresponse,
  failureresponse,
  servererrorresponse,
} = require("../utils/response-helper");


// ADD CATEGORY { JWT granted }
const addcategory = async (req, res) => {
  try {
    const userid = req.user.userid;
    const { category_name, category_type } = req.body;

console.log("BODY1 =", req.body);
console.log("JWT =", req.user);

    if (!category_name || category_type === undefined || category_type === null) {
      return failureresponse(res, 0, "Enter Required Fields !");
    }

    if (![0, 1].includes(Number(category_type))) {
      return failureresponse(res, 0, "Invalid Category Type !");
    }


    const categoryName = category_name.trim();
    
    const { rows } = await pool.query(
      "SELECT * FROM sp_add_category($1,$2,$3)",
      [userid, categoryName, category_type]
    );

    if (!rows || rows.length === 0) {
      return failureresponse(res, 0, "No response from database");
    }

    const result = rows[0];

    if (result.rtncode === 1) {
      return successresponse(res, 1, result.rtnmsg,{categoryid: result.rtncategoryid});
    } else {
      return failureresponse(res, result.rtncode, result.rtnmsg);
    }
  } catch (error) {
    console.error("Error in add category:", error);
    return servererrorresponse(res, 0, "Internal Server Error");
  }
};



const editcategory = async (req, res) => {
  try {
    const userid = req.user.userid;
    const { categoryid, category_name } = req.body;

console.log("BODY1 =", req.body);
console.log("BODY2 =", req.user.userid);
    if (!categoryid || !category_name) {
      return failureresponse(res, 0, "Invalid Input");
    }

      const newCategoryName= category_name.trim();

      const { rows } = await pool.query(
        "SELECT * FROM sp_edit_category($1,$2,$3)",
        [categoryid, newCategoryName.trim(), userid]
      );

      const result = rows[0];
      if (result.rtncode === 1) {
        return successresponse(res, 1, result.rtnmsg);
      } else {
        return failureresponse(res, result.rtncode, result.rtnmsg);
      }
  }
  catch (error) {
    console.error("Error in edit category:", error);
    return servererrorresponse(res, 0, "Internal Server Error");
  }
};


const getcategory = async (req, res) => {
  try {
    const userid = req.user.userid;

    if (!userid) {
      return failureresponse(res, 0, "Invalid UserID !");
    }

    const { rows } = await pool.query(
      "SELECT * FROM sp_get_category($1)",
      [userid]
    );

    if (!rows || rows.length === 0) {
      return successresponse(res, 1, "No Categories Found", { categories: [] });
    }

    // SP error case
    if (rows[0].rtncode === 0) {
      return failureresponse(res, rows[0].rtncode, rows[0].rtnmsg);
    }

    // Clean category list (remove rtncode & rtnmsg duplication)
    const categories = rows.map(row => ({
      categoryid: row.categoryid,
      categoryname: row.categoryname,
      categorytype: row.categorytype,
      issystem: row.issystem
    }));

    return successresponse(
      res,
      1,
      "Categories retrieved successfully !",
      { categories }
    );

  } catch (error) {
    console.error("Error in get category:", error);
    return servererrorresponse(res, error.message);
  }
};





module.exports = {
  addcategory,
  editcategory,
  getcategory
};
