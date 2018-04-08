const express = require('express')
    , router = express.Router()
    , createErrorHandler = require('./utils').createErrorHandler
    , HttpStatus = require('http-status-codes');

router.use('/auth', require('./auth'));
router.use('/agencies', require('./agencies'));
router.use('/user', require('./user'));
router.use('/requests', require('./requests'));

router.use(function(req, res, next) {
    if (!req.route)
        return createErrorHandler(res, HttpStatus.NOT_FOUND)("404");
    next();
});

module.exports = router;
