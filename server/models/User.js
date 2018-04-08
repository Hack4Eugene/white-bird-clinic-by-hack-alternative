const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const Schema = mongoose.Schema;

let UserSchema = Schema({
    Name: {
        type: String,
        default: "",
        required: true,
    },

    Email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        default: ""
    },

    Password: {
        type: String,
        // default: null,
        required: true,
    },

    Protected: {
        type: Boolean,
        default: false,
    },

});

/* hash password before user saves the password */
UserSchema.pre('save', function (next) {
    let user = this;

    // update hashed password if needed
    if (this.isModified('Password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }

            bcrypt.hash(user.Password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }

                user.Password = hash;
                next();
            });
        });
    }
    else {
        return next();
    }
});

/* compare password if user login */
UserSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.Password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

UserSchema.methods.getPublicFields = function () {
    return {
        Name: this.name,
        Email: this.email,
    }
};



function validateEmail(email){
    return typeof email === 'string' && validator.isEmail(email);
}

function validatePassword(password){
    return typeof password === 'string';
}

function validateName(name){
    return typeof name === 'string';
}


function UserLoginInfoValidator(name, email, password) {
    return validateEmail(email) && validatePassword(password);
}

module.exports = {
    User                   :   mongoose.model('User', UserSchema),
    UserLoginInfoValidator :   UserLoginInfoValidator,
    validatePassword       :   validatePassword,
};
