import {Map, Set, List, OrderedSet} from 'immutable';
let handleFetchOneAgency = (state, payload) => {
    return state;
};
let handleFetchOneAgencySuccess = (state, payload) => {


   payload = payload.agency;
   console.log("FETCH_ONE PAYLOAD: ", payload);
   console.log("_id: ", payload._id, " Last_Editor: ", payload.Last_Editor);
   console.log("about to make agnecy.........");
   let agency = Map({
   "_id":payload._id,
   "Status":payload.Status,
   "Completion_Status":payload.Completion_Status,
   "Last_Editor":payload.Last_Editor,
   "Proofed_By":payload.Proofed_By,
   "Service_Name":payload.Service_Name,
   "Other_Names":payload.Other_Names,
   "Notes":payload.Notes,
   "Main_Phone":payload.Main_Phone,
   "Other_Phone_Numbers":payload.Other_Phone_Numbers,
   "Fax":payload.Fax,
   "Physical_Site_Address":payload.Physical_Site_Address,
   "Physical_Site_City":payload.Physical_Site_City,
   "Physical_Site_State":payload.Phyiscal_Site_State,
   "Physical_Site_Zip":payload.Phyiscal_Site_Zip,
   "Web_Address":payload.Web_Address,
   "Email":payload.Email,
   "Other_Emails":payload.Other_Emails,
   "ADA_Access":payload.ADA_Access,
   "Languages_Spoken":payload.Languages_Spoke,
   "WBCrisisLine":payload.WBCrisisLine,
   "Hours_of_Operation":payload.Hours_of_Operation,
   "Intended_Participants":payload.Intended_Participants,
   "Description_of_Service":payload.Description_of_Service,
   "Location":payload.Location,
   "Tag":payload.Tag,
   "Sub_Tag":payload.Sub_Tag,
   "Created_At":payload.Created_At,
   "Last_Modified":payload.Last_Modified,
   "Extra_Field_Titles":payload.Extra_Field_Titles,
   "Extra_Field_Data":payload.Extra_Field_Data
   });
   console.log("about to show agency.....");

   console.log("FETCH ONE AGENCY: ", agency);

   let newState = state.set("data", agency);

    return newState
};

let handleFetchOneAgencyFailure = (state, payload) => {
    return state;
};

export {
    handleFetchOneAgency,
    handleFetchOneAgencySuccess,
    handleFetchOneAgencyFailure
}
