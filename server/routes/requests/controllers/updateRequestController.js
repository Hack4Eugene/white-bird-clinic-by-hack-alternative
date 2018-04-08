const HttpStatus = require("http-status-codes");
const validator = require('validator');
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Request = require("../../../models").Request;
const RequestValidator = require("../../../models/").RequestValidator;
const createErrorHandler = require("../../utils").createErrorHandler;



const RequestProperties = ['title', 'questions'];

function validateInput(req) {
    let payload = req.body;
    return validateParameters(req.params)
        && validateFormat(payload, RequestProperties)
        && RequestValidator(payload.title, payload.questions);
}


function validateParameters(prm) {
    return prm.hasOwnProperty('RequestId') && typeof prm.RequestId === 'string'
        && ObjectIdIsValid(prm.RequestId);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


module.exports = function (req, res, next) {
    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload and URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }
    const RequestId = req.params.RequestId,
        userId = req.user._id;

    Request.findOneAndUpdate(
        {
            _id: RequestId, _creator: userId, isDeleted: false},
        {
            $set: {
                "title": req.body.title,
                "questions" : req.body.questions,
            },
        },
        {
            new: true,
        }
    )
        .exec()
        .then(function (Request) {
            if (Request === null) {
                const errorMessage = "Cannot find Request has id: " + RequestId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
            return res.status(HttpStatus.ACCEPTED).json({
                Request: Request
            });
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
