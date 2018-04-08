const getAllRequestsController = require("./getAllRequestsController");
const createRequestController   = require("./createRequestController");
const getOneRequestController   = require("./getOneRequestController");
const deleteRequestController   = require("./deleteRequestController");
const updateRequestController   = require("./updateRequestController");

const requestsControllers = {
    // create an Request
    createRequestController,

    // get a list of Request of a user
    getAllRequestsController,

    // get one Request
    getOneRequestController,

    // delete one Request
    deleteRequestController,

    //update one Request
    updateRequestController
};

module.exports = requestsControllers;
