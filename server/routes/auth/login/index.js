const express = require('express')
    , loginRouter = express.Router()
    , loginControllers = require('./controllers');

loginRouter.post('/', loginControllers.loginController);

module.exports = loginRouter;
