const validator = require('validator');
const HttpStatus = require("http-status-codes");
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Agency = require("../../../models/").Agency;
const AgencyValidator = require("../../../models/").AgencyValidator;
const createErrorHandler = require("../../utils").createErrorHandler;


const properties = [
  'Status',
  'Completion_Status',
  'Last_Editor',
  'Proofed_By',
  'Service_Name',
  'Other_Names',
  'Notes',
  'Main_Phone',
  'Other_Phone_Numbers',
  'Fax',
  'Physical_Site_Address',
  'Physical_Site_City',
  'Physical_Site_State',
  'Physical_Site_Zip',
  'Web_Address',
  'Email',
  'Other_Emails',
  'ADA_Access',
  'Languages_Spoken',
  'WBCrisisLine',
  'Hours_of_Operation',
  'Intended_Participants',
  'Description_of_Service',
  'Location',
  'Tag',
  'Sub_Tag',
  'Created_At',
  'Last_Modified',
  'Extra_Field_Titles',
  'Extra_Field_Data',
];


function validateInput(payload) {
    console.log('payload: ');
    console.log(payload);
    return validateFormat(payload, properties)
        && AgencyValidator(
          payload.Status,
          payload.Completion_Status,
          payload.Last_Editor,
          payload.Proofed_By,
          payload.Service_Name,
          payload.Other_Names,
          payload.Notes,
          payload.Main_Phone,
          payload.Other_Phone_Numbers,
          payload.Fax,
          payload.Physical_Site_Address,
          payload.Physical_Site_City,
          payload.Physical_Site_State,
          payload.Physical_Site_Zip,
          payload.Web_Address,
          payload.Email,
          payload.Other_Emails,
          payload.ADA_Access,
          payload.Languages_Spoken,
          payload.WBCrisisLine,
          payload.Hours_of_Operation,
          payload.Intended_Participants,
          payload.Description_of_Service,
          payload.Location,
          payload.Tag,
          payload.Sub_Tag,
          payload.Created_At,
          payload.Last_Modified,
          payload.Extra_Field_Titles,
          payload.Extra_Field_Data
        );
}

function validateFormat(payload, properties){
    let res = true;
    properties.forEach(function (property) {
        console.log(property + ' is included: ' + payload.hasOwnProperty(property));
        res = res && payload.hasOwnProperty(property);
    });
    return res;
}


module.exports = function (req, res, next) {
    const payload = req.body;

    if (!validateInput(payload)) {
        const errorMessage = 'please give the correct payload';
        createErrorHandler(res, HttpStatus.BAD_REQUEST)(errorMessage);
        return;
    }

    // first find Agency by Id
    Agency.findOne(
        { _id: payload._id}
    ).exec()
        .then(function (agency){
            if (agency !== null){
                const errorMessage = "Agency " + payload._id + " Already Exists" ;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

            // then save the agency and add the agencyId in user
            const newAgency = new Agency({
                Status: payload.Status,
                Completion_Status: payload.Completion_Status,

                Last_Editor: payload.Last_Editor,
                Proofed_By: payload.Proofed_By,

                Service_Name:payload.Service_Name,
                Other_Names:payload.Other_Names,

                Notes:payload.Notes,

                Main_Phone:payload.Main_Phone,
                Other_Phone_Numbers:payload.Other_Phone_Numbers,

                Fax:payload.Fax,

                Physical_Site_Address:payload.Physical_Site_Address,
                Physical_Site_City:payload.Physical_Site_City,
                Physical_Site_State:payload.Physical_Site_State,
                Physical_Site_Zip:payload.Physical_Site_Zip,

                Web_Address:payload.Web_Address,

                Email:payload.Email,
                Other_Emails:payload.Other_Emails,

                ADA_Access:payload.ADA_Access,
                Languages_Spoken:payload.Languages_Spoken,

                WBCrisisLine:payload.WBCrisisLine,

                Hours_of_Operation:payload.Hours_of_Operation,

                Intended_Participants:payload.Intended_Participants,
                Description_of_Service:payload.Description_of_Service,

                Location:payload.Location,

                Tag:payload.Tag,
                Sub_Tag:payload.Sub_Tag,

                Created_At:payload.Created_At,
                Last_Modified:payload.Last_Modified,

                Extra_Field_Titles:payload.Extra_Field_Titles,
                Extra_Field_Data:payload.Extra_Field_Data,
            });

            newAgency.save()
                .then(function (agency) {
                    return res.status(HttpStatus.OK).json({
                        agency: newAgency.getPublicFields()
                    })
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));
            console.log("Dope");
      });
};
