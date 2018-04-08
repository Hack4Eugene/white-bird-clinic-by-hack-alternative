const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Agency = require("../../../models/").Agency;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;



function validateInput(req) {
    return validateParameters(req.params);
}

function validateParameters(prm) {
    return prm.hasOwnProperty('agencyId') && typeof prm.agencyId === 'string'
        && ObjectIdIsValid(prm.agencyId);
}


module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'please give the valid agencyID in url';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    const agencyId = req.params.agencyId,
        userId = req.user._id;

    Agency.findOne({_id: agencyId})
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
