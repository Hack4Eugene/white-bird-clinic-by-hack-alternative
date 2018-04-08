const Request = require("../../../models/").Request;
const createErrorHandler = require("../../utils").createErrorHandler;
const HttpStatus = require("http-status-codes");


function validateInput(params) {
    return validateParameters(params);
}

function validateParameters(prm) {
    return prm.hasOwnProperty('requestId') && typeof prm.requestId === 'string';
}


module.exports = function (req, res, next) {

    if (!validateInput(req.params)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    Request.findOne(
        {_id: req.params.requestId})
        // .select("name totalCapacity groupCapacity endDate participants")
        .exec()
        .then(function (request) {
            if (request !== null) {
                return res.json({
                    request: request
                });
            } else {
                const errorMessage = "Cannot find an Request has id " + req.params.requestId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
