const HttpStatus = require("http-status-codes");
const validator = require('validator');

const Request = require("../../../models/").Request;
const RequestValidator = require("../../../models/").RequestValidator;
const User = require("../../../models/").User;
const createErrorHandler = require("../../utils").createErrorHandler;


const RequestProperties = ['_Agency', 'Email'];

function validateInput(req) {
    let payload = req.body;
    return validateFormat(payload, RequestProperties);
}


function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}

// from first page of google search
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 40; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

module.exports = function (req, res, next) {
    if (!validateInput(req)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }
    const payload = req.body;

    const newRequest = new Request({
        _Agency:  payload._Agency,
        Verification_Code: makeid(),
        Email:payload.Email,
        Created_At:Date.now()
    });

    newRequest.save()
        .then(function (agency) {
            return res.status(HttpStatus.OK).json({})
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR))
};
