const express = require('express')
    , agenciesRouter = express.Router()
    , agenciesControllers = require('./controllers')
    , authenticationMiddleware = require("../../config/main").authenticationMiddleware;

// the second argument is the authentication middleware, has to be passed
agenciesRouter.get('/', agenciesControllers.getAllAgenciesController);
agenciesRouter.get('/search/:searchText', agenciesControllers.searchAgenciesController);
agenciesRouter.post('/', agenciesControllers.createAgencyController);

// operations regarding to a specific agency
agenciesRouter.get('/:agencyId', agenciesControllers.getOneAgencyController);
agenciesRouter.put('/:agencyId', authenticationMiddleware, agenciesControllers.updateAgencyController);
agenciesRouter.delete('/:agencyId', authenticationMiddleware, agenciesControllers.deleteAgencyController);

module.exports = agenciesRouter;
