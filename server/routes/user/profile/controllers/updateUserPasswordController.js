const HttpStatus = require("http-status-codes");

const User = require("../../../../models/").User;
const UserProfileValidator = require("../../../../models/").UserProfileValidator;
const validatePassword = require("../../../../models/").validatePassword;
const createErrorHandler = require("../../../utils").createErrorHandler;


const properties = ['Password', 'newPassword'];


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
    User.findOne({ _id: req.user._id})
        .exec()
        .then(
            function (user) {
                // check if the user email has been found
                if (user === null){
                    const errorMessage = "Cannot find user by its email in the database";
                    createErrorHandler(res, HttpStatus.NOT_FOUND) (errorMessage);
                    return;
                }
                // check if the password matched
                user.comparePassword(payload.Password, function (err, isMatch){
                    if (isMatch && !err) {
                      user.Password = payload.newPassword;
                      user.save()
                      .then(function (user) {
                          res.status(HttpStatus.ACCEPTED).json({})
                      })
                      .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
                    }
                    else {
                        const errorMessage = "Password doesn't match";
                        createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
                    }
                });
            }
        )
        .catch( createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR) );

};
