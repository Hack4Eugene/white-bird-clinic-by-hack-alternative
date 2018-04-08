const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Agency = require("../../../models/").Agency;
const createErrorHandler = require("../../utils").createErrorHandler;



function validateInput(params) {
    return validateParameters(params);
}


function validateParameters(prm) {
    return prm.hasOwnProperty('agencyId') && typeof prm.agencyId === 'string'
        && ObjectIdIsValid(prm.agencyId);
}



module.exports = function (req, res, next) {

    if (!validateInput(req.params)) {
        const errorMessage = 'please give the correct agencyID in URL';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    Agency.findOne(
        {_id: req.params.agencyId})
        .select({
          "Status": 1,
          "Completion_Status": 1,
          "Last_Editor": 1,
          "Proofed_By": 1,
          "Service_Name": 1,
          "Other_Names": 1,
          "Notes": 1,
          "Main_Phone": 1,
          "Other_Phone_Numbers": 1,
          "Fax": 1,
          "Physical_Site_Address": 1,
          "Physical_Site_City": 1,
          "Physical_Site_State": 1,
          "Physical_Site_Zip": 1,
          "Web_Address": 1,
          "Email": 1,
          "Other_Emails": 1,
          "ADA_Access": 1,
          "Languages_Spoken": 1,
          "WBCrisisLine": 1,
          "Hours_of_Operation": 1,
          "Intended_Participants": 1,
          "Description_of_Service": 1,
          "Location": 1,
          "Tag": 1,
          "Sub_Tag": 1,
          "Created_At": 1,
          "Last_Modified": 1,
          "Extra_Field_Titles": 1,
          "Extra_Field_Data": 1,
        })
        .exec()
        .then(function (agency) {
            if (agency !== null) {
                return res.json({
                    agency: agency
                });
            } else {
                const errorMessage = "Cannot find an agency has id " + req.params.agencyId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }
        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
};
