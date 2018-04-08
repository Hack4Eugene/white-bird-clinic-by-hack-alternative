const mongoose = require('mongoose');

const AgencySchema = require('./Agency').Agency;
const Schema = mongoose.Schema;
const Agency = mongoose.model('Agency');

let RequestSchema = Schema({
    _Agency: {
        type: Agency.schema,
        required: true,
    },

    Verified: {
        type: Boolean,
        default: false,
    },

    Verification_Code: {
        type: String,
        default: "",
    },

    Email: {
        type: String,
        default: "",
    },

    Created_At: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = {
    Request: mongoose.model('Request', RequestSchema),
};
