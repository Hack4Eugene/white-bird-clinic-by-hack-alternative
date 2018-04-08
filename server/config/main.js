const passport = require('passport');


module.exports = {
    'secret': 'asdawldjal',
    databaseUrl: 'mongodb://whitebird:h4cwhitebird1970@ds237389.mlab.com:37389/whitebird',
    authenticationMiddleware: passport.authenticate('jwt', { session: false }),
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
};

process.env.SENDGRID_API_KEY ? console.log('sendgrid API key found') : console.log('sendgrid API key not found, you will not be able to send emails. You must export the key to the enviroment variable SENDGRID_API_KEY')
