const updateUserProfileController = require('./updateUserProfileController');
const updateUserPasswordController = require('./updateUserPasswordController');
const getUserProfileController = require('./getUserProfileController');
const deleteUserController = require('./deleteUserController');

let profileControllers = {
    getUserProfileController,
    updateUserProfileController,
    updateUserPasswordController,
    deleteUserController,
}

module.exports = profileControllers;
