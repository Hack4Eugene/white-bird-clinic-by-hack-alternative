const express = require('express')
    , authRouter = express.Router();

authRouter.use('/login', require('./login'));
authRouter.use('/signup', require('./signup'));
authRouter.use('/resetpassword', require('./resetpassword'));


module.exports = authRouter;
