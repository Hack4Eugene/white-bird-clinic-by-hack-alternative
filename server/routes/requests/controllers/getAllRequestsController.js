const Request = require("../../../models/").Request;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");

module.exports = function (req, res, next) {
    // no input check here
    Request.find({})
        .select({
          "Created_At": 1,
          "_Agency": 1,
          "Verified": 1,
          "Email": 1,
        })
        .exec()
        .then(function (requests) {
            return res.json({
                requests: requests,
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
