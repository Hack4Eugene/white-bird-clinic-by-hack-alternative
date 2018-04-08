const User = require("./User").User;
const UserLoginInfoValidator = require("./User").UserLoginInfoValidator;
const UserProfileValidator = require("./User").UserProfileValidator;

const Agency = require("./Agency").Agency;
const AgencyValidator = require("./Agency").AgencyValidator;

const Request = require("./Request").Request;
const RequestValidator = require("./Request").RequestValidator;


module.exports = {

    User: User,
    UserProfileValidator: UserProfileValidator,
    UserLoginInfoValidator : UserLoginInfoValidator,

    Agency: Agency,
    AgencyValidator : AgencyValidator,

    Request: Request,
    RequestValidator: RequestValidator,
};
