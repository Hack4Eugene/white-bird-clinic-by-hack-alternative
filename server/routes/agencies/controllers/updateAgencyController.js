const HttpStatus = require("http-status-codes");
const validator = require('validator');
const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;

const Agency = require("../../../models/").Agency;
const AgencyValidator = require("../../../models/").AgencyValidator;
const createErrorHandler = require("../../utils").createErrorHandler;

module.exports = function (req, res, next) {

    const agencyId = req.params.agencyId,
        userId = req.user._id,
        payload = req.body;


    Agency.findOne({
        _id: agencyId
    })
        .exec()
        .then(function (agency) {
            if (agency === null){
                const errorMessage = "Cannot find agency has id: " + agencyId;
                return createErrorHandler(res, HttpStatus.NOT_FOUND)(errorMessage);
            }

          agency.Status = payload.Status;
          agency.Completion_Status = payload.Completion_Status;
          agency.Last_Editor = payload.Last_Editor;
          agency.Proofed_By = payload.Proofed_By;
          agency.Service_Name = payload.Service_Name;
          agency.Other_Names = payload.Other_Names;
          agency.Notes = payload.Notes;
          agency.Main_Phone = payload.Main_Phone;
          agency.Other_Phone_Numbers = payload.Other_Phone_Numbers;
          agency.Fax = payload.Fax;
          agency.Physical_Site_Address = payload.Physical_Site_Address;
          agency.Physical_Site_City = payload.Physical_Site_City;
          agency.Physical_Site_State = payload.Physical_Site_State;
          agency.Physical_Site_Zip = payload.Physical_Site_Zip;
          agency.Web_Address = payload.Web_Address;
          agency.Email = payload.Email;
          agency.Other_Emails = payload.Other_Emails;
          agency.ADA_Access = payload.ADA_Access;
          agency.Languages_Spoken = payload.Languages_Spoken;
          agency.WBCrisisLine = payload.WBCrisisLine;
          agency.Hours_of_Operation = payload.Hours_of_Operation;
          agency.Intended_Participants = payload.Intended_Participants;
          agency.Description_of_Service = payload.Description_of_Service;
          agency.Location = payload.Location;
          agency.Tag = payload.Tag;
          agency.Sub_Tag = payload.Sub_Tag;
          agency.Created_At = new Date(payload.Created_At);
          agency.Last_Modified = new Date(payload.Last_Modified);
          agency.Extra_Field_Titles = payload.Extra_Field_Titles;
          agency.Extra_Field_Data = payload.Extra_Field_Data;


            agency.save()
                .then(function (agency) {
                    return res.json({
                        agency: agency
                    });
                })
                .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

        })
        .catch(createErrorHandler(res, HttpStatus.INTERNAL_SERVER_ERROR));

};
