const express = require('express')
    , requestRouter = express.Router()
    , requestControllers = require('./controllers')
    , authenticationMiddleware = require("../../config/main").authenticationMiddleware;

// the second argument is the authentication middleware, has to be passed
requestRouter.get('/', authenticationMiddleware, requestControllers.getAllRequestsController);
requestRouter.post('/', requestControllers.createRequestController);

// operations regarding to a specific survey
requestRouter.get('/:requestId', authenticationMiddleware, requestControllers.getOneRequestController);
requestRouter.put('/:requestId', authenticationMiddleware, requestControllers.updateRequestController);
requestRouter.delete('/:requestId', authenticationMiddleware, requestControllers.deleteRequestController);

module.exports = requestRouter;
