const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Agency = require("../../../models/").Agency;
const createErrorHandler = require("../../utils").createErrorHandler;

function validateInput(req) {
    return validateParameters(req.params);
}


function validateParameters(prm) {
    return true;
}



module.exports = function (req, res, next) {

    if (!validateInput(req)) {
        const errorMessage = 'Please use the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    /*
    Agency.ensureIndex({
      Service_Name: "text",
      Tag: "text",
      Sub_Tag: "text",
      Description_of_Service: "text",
      Physical_Site_Address: "text",
      Physical_Site_City: "text",
      Physical_Site_State: "text",
      Physical_Site_Zip: "text",
      Intended_Participants: "text"
    });
    */
    console.log('req.params.searchText');
    console.log(req.params.searchText);
    Agency.find( { $text: { $search: req.params.searchText} } )
        .select({
          "Service_Name": 1,
          "Description_of_Service": 1,
          "Tag": 1,
          "Sub_Tag": 1,
          "Other_Names": 1,
          "Main_Phone": 1,
          "Physical_Site_Address": 1,
          "Physical_Site_City": 1,
          "Physical_Site_State": 1,
          "Physical_Site_Zip": 1,
          "Web_Address": 1,
          "Hours_of_Operation": 1,
        })
        .exec()
        .then(function (agencies) {
            if (agencies !== null) {
                return res.json({
                    agencies: agencies,
                });
            } else {
                const errorMessage = "No Match Found.";
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
