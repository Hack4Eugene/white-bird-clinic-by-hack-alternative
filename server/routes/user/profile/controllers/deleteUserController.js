const HttpStatus = require("http-status-codes");

const User = require("../../../../models/").User;
const UserProfileValidator = require("../../../../models/").UserProfileValidator;
const validatePassword = require("../../../../models/").validatePassword;
const createErrorHandler = require("../../../utils").createErrorHandler;


const properties = ['userId'];


function validateInput(payload, properties) {
    return validateFormat(payload, properties);
}


function validateFormat(payload, properties){
    let result = true;
    properties.forEach(function (property) {
        result = result && payload.hasOwnProperty(property);
    });
    return result;
}


module.exports = function (req, res, next){
    const payload = req.body;
    // save a new activity to to the database
    if (!validateInput(payload, properties)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }
    User.findOne({ _id: payload.userId, Protected: false})
        .remove()
        .exec()
        .then(
            function (user) {
                // check if the user email has been found
                if (user === null){
                    const errorMessage = "Cannot delete user";
                    createErrorHandler(res, HttpStatus.NOT_FOUND) (errorMessage);
                    return;
                }
                res.status(HttpStatus.ACCEPTED).json({});
            }
        )
        .catch( createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR))

};
