const express = require('express')
    , signupRouter = express.Router()
    , signupControllers = require('./controllers')
    , authenticationMiddleware = require("../../../config/main").authenticationMiddleware;

signupRouter.post('/', authenticationMiddleware, signupControllers.signupController);

module.exports = signupRouter;
