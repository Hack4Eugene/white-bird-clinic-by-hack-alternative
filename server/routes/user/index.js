const express = require('express')
    , userRouter = express.Router();

userRouter.use('/profile', require('./profile'));

module.exports = userRouter;
