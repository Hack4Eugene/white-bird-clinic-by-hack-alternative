const express = require('express')
    , userRouter = express.Router({ mergeParams: true })
    , userControllers = require('./controllers')
    , authenticationMiddleware = require("../../../config/main").authenticationMiddleware;

userRouter.get('/'
             , authenticationMiddleware
             , userControllers.getUserProfileController);

userRouter.post('/deleteUser'
             , authenticationMiddleware
             , userControllers.deleteUserController);

userRouter.post('/updatePassword'
             , authenticationMiddleware
             , userControllers.updateUserPasswordController);

userRouter.put('/'
             , authenticationMiddleware
             , userControllers.updateUserProfileController);

module.exports = userRouter;
