// ✅ SUCCESS RESPONSE
const successresponse = (res, rtncode, rtnmsg, data = {}) => {
  return res.status(200).json({
    RtnCode: rtncode,
    RtnMsg: rtnmsg,
    Data: data,
    Error: null
  });
};

// ✅ BUSINESS FAILURE (still 200)
const failureresponse = (res, rtncode, rtnmsg) => {
  return res.status(200).json({
    RtnCode: rtncode,
    RtnMsg: rtnmsg,
    Data: {},
    Error: null
  });
};

// ✅ SERVER ERROR
const servererrorresponse = (res, rtncode = 0, error = null) => {
    return res.status(500).json({
        RtnCode: rtncode,
        RtnMsg: "Internal Server Error",
        Data: {},
        Error: error
    });
};

module.exports = {
  successresponse,
  failureresponse,
  servererrorresponse
};
