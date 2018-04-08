// const agenciesControllers = require('./agenciesControllers');

const getAllAgenciesController = require("./getAllAgenciesController");
const createAgencyController   = require("./createAgencyController");
const getOneAgencyController   = require("./getOneAgencyController");
const searchAgenciesController   = require("./searchAgenciesController");
const deleteAgencyController   = require("./deleteAgencyController");
const updateAgencyController   = require("./updateAgencyController");

const agenciesControllers = {
    // create an agency
    createAgencyController,

    // get a list of agencies
    getAllAgenciesController,

    // search agency
    searchAgenciesController,

    // get one agency
    getOneAgencyController,

    // delete one agency
    deleteAgencyController,

    // update one agency
    updateAgencyController,

};

module.exports = agenciesControllers;
