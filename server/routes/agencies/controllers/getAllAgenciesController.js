const Agency = require("../../../models/").Agency;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    // no input check here
    Agency.find({})
        .select({
          "Service_Name": 1,
          "Description_of_Service": 1,
          "Tag": 1,
          "Sub_Tag": 1,
          "Other_Names": 1,
          "Main_Phone": 1,
          "Physical_Site_Address": 1,
          "Physical_Site_City": 1,
          "Physical_Site_State": 1,
          "Physical_Site_Zip": 1,
          "Web_Address": 1,
          "Hours_of_Operation": 1,
        })
        .exec()
        .then(function (agencies) {
            return res.json({
                agencies: agencies,
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
