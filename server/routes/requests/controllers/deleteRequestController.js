const HttpStatus = require("http-status-codes");

const Request = require("../../../models/").Request;
const createErrorHandler = require("../../utils").createErrorHandler;
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;


function validateInput(prm) {
    return validateParameters(prm);
}

function validateParameters(prm) {
    return prm.hasOwnProperty('requestId') && typeof prm.requestId === 'string'
        && ObjectIdIsValid(prm.requestId);
}


module.exports = function (req, res, next) {

    console.log(req.params);

    const requestPrm = req.params;
    console.log(requestPrm );
    const requestId = requestPrm.requestId;
    console.log(requestId );

    if (!validateInput(requestPrm)) {
        const errorMessage = 'please give the valid requestID in url';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    Request.findOne({_id: requestId})
        .remove()
        .exec()
        .then(
            function (user) {
                // check if the user email has been found
                if (user === null){
                    const errorMessage = "Cannot delete agency";
                    createErrorHandler(res, HttpStatus.NOT_FOUND) (errorMessage);
                    return;
                }
                res.status(HttpStatus.ACCEPTED).json({});
            }
        )
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR))
};
