const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

let AgencySchema = Schema({
    Status: {
        type: Boolean,
        default: false,
    },
    Completion_Status: {
        type: Boolean,
        default: false,
    },


    Last_Editor: {
        type: String,
        default: "",
    },
    Proofed_By: {
        type: String,
        default: "",
    },


    Service_Name: {
        type: String,
        default: "",
        required: true,
        index: true,
    },
    Other_Names: {
        type: [String],
        default: [""],
        index: true,
    },


    Notes: {
        type: String,
        default: "",
    },


    Main_Phone: {
        type: String,
        default: "",
    },
    Other_Phone_Numbers: {
        type: [String],
        default: [""],
    },



    Fax: {
        type: String,
        default: "",
    },



    Physical_Site_Address: {
        type: String,
        default: "",
        index: true,
    },
    Physical_Site_City: {
        type: String,
        default: "",
        index: true,
    },
    Physical_Site_State: {
        type: String,
        default: "",
        index: true,
    },
    Physical_Site_Zip: {
        type: String,
        default: "",
        index: true,
    },



    Web_Address: {
        type: String,
        default: "",
        index: true,
    },



    Email: {
        type: String,
        default: "",
    },
    Other_Emails: {
        type: [String],
        default: [""]
    },


    ADA_Access: {
        type: String,
        default: "",
    },
    Languages_Spoken: {
        type: [String],
        default: [""],
        index: true,
    },



    WBCrisisLine: {
        type: String,
        default: "",
    },



    Hours_of_Operation: {
        type: String,
        default: "",
    },
    Intended_Participants: {
        type: String,
        default: "",
        index: true,
    },




    Description_of_Service: {
        type: String,
        default: "",
        index: true,
    },



    Location: {
        type: String,
        default: "",
        index: true,
    },




    Tag: {
        type: String,
        default: "",
        index: true,
    },

    Sub_Tag: {
        type: String,
        default: "",
        index: true,
    },



    Created_At: {
        type: Date,
        default: Date.now,
        required: true,
    },
    Last_Modified: {
        type: Date,
        default: Date.now,
        required: true,
    },




    Extra_Field_Titles: {
        type: [String],
        default: [""],
    },
    Extra_Field_Data: {
        type: [String],
        default: [""],
    },
});

AgencySchema.index({
  Service_Name: "text",
  Tag: "text",
  Sub_Tag: "text",
  Description_of_Service: "text",
  Physical_Site_Address: "text",
  Physical_Site_City: "text",
  Physical_Site_State: "text",
  Physical_Site_Zip: "text",
  Intended_Participants: "text"
}, { name: "AgencyIndex" });

AgencySchema.pre('save', function(next){
    let agency = this;

    if (!this.isNew){
        agency.lastModifiedTime = Date.now();
    }
    next();
});

AgencySchema.methods.getPublicFields = function () {
    return {
        _id: this._id,

        Status: this.Status,
        Completion_Status: this.Completion_Status,

        Last_Editor: this.Last_Editor,
        Proofed_By: this.Proofed_By,

        Service_Name:this.Service_Name,
        Other_Names:this.Other_Names,

        Notes:this.Notes,

        Main_Phone:this.Main_Phone,
        Other_Phone_Numbers:this.Other_Phone_Numbers,

        Fax:this.Fax,

        Physical_Site_Address:this.Physical_Site_Address,
        Physical_Site_City:this.Physical_Site_City,
        Physical_Site_State:this.Physical_Site_State,
        Physical_Site_Zip:this.Physical_Site_Zip,

        Web_Address:this.Web_Address,

        Email:this.Email,
        Other_Emails:this.Other_Emails,

        ADA_Access:this.ADA_Access,
        Languages_Spoken:this.Languages_Spoken,

        WBCrisisLine:this.WBCrisisLine,

        Hours_of_Operation:this.Hours_of_Operation,

        Intended_Participants:this.Intended_Participants,
        Description_of_Service:this.Description_of_Service,

        Location:this.Location,

        Tag:this.Tag,
        Sub_Tag:this.Sub_Tag,

        Created_At:this.Created_At,
        Last_Modified:this.Last_Modified,

        Extra_Field_Titles:this.Extra_Field_Titles,
        Extra_Field_Data:this.Extra_Field_Data,
    };
};

// validate input

function validateString(input){
    console.log(input + " is a string: " + (typeof input === 'string'))
    return typeof input === 'string';
}

function validateStringArray(input){
    var isArray = Array.isArray(input);
    console.log(input + " is a string array: " + (isArray))
    return isArray;
}

function validatePhoneArray(input){
    var isArray = Array.isArray(input);
    console.log(input + " is a phone array: " + (isArray))
    return isArray;
}

function validatePhone(input){
    var isPhone = validator.isMobilePhone(input, ['en-US']);
    console.log(input + " is a phone: " + (isPhone))
    return isPhone;
}

function validateEmailArray(input){
    var isArray = Array.isArray(input);
    console.log(input + " is an email array: " + (isArray))
    return isArray;
}

function validateEmail(input){
    var isEmail = validator.isEmail(input);
    console.log(input + " is a email: " + (isEmail))
    return isEmail;
}

function validateBool(input){
    console.log(input + " is a boolean: " + (typeof input === 'boolean'))
    return typeof input === 'boolean';
}

function validateDate(input) {
    console.log(input + " is a date: " + (typeof input === 'string' && validator.toDate(input) !== null))
    return typeof input === 'string' && validator.toDate(input) !== null;
}


function AgencyValidator(
  Status,
  Completion_Status,
  Last_Editor,
  Proofed_By,
  Service_Name,
  Other_Names,
  Notes,
  Main_Phone,
  Other_Phone_Numbers,
  Fax,
  Physical_Site_Address,
  Physical_Site_City,
  Physical_Site_State,
  Physical_Site_Zip,
  Web_Address,
  Email,
  Other_Emails,
  ADA_Access,
  Languages_Spoken,
  WBCrisisLine,
  Hours_of_Operation,
  Intended_Participants,
  Description_of_Service,
  Location,
  Tag,
  Sub_Tag,
  Created_At,
  Last_Modified,
  Extra_Field_Titles,
  Extra_Field_Data
){
    return validateBool(Status) &&
            validateBool(Completion_Status) &&
            validateString(Last_Editor) &&
            validateString(Proofed_By) &&
            validateString(Service_Name) &&
            validateStringArray(Other_Names) &&
            validateString(Notes) &&
            validatePhone(Main_Phone) &&
            validatePhoneArray(Other_Phone_Numbers) &&
            validateString(Fax) &&
            validateString(Physical_Site_Address) &&
            validateString(Physical_Site_City) &&
            validateString(Physical_Site_State) &&
            validateString(Physical_Site_Zip) &&
            validateString(Web_Address) &&
            validateEmail(Email) &&
            validateEmailArray(Other_Emails) &&
            validateString(ADA_Access) &&
            validateStringArray(Languages_Spoken) &&
            validatePhone(WBCrisisLine) &&
            validateString(Hours_of_Operation) &&
            validateString(Intended_Participants) &&
            validateString(Description_of_Service) &&
            validateString(Location) &&
            validateString(Tag) &&
            validateString(Sub_Tag) &&
            validateDate(Created_At) &&
            validateDate(Last_Modified) &&
            validateStringArray(Extra_Field_Titles) &&
            validateStringArray(Extra_Field_Data)
}



// export to other file
module.exports = {
    Agency: mongoose.model('Agency', AgencySchema),
    AgencyValidator: AgencyValidator,
};
