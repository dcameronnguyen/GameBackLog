const Log = require('../models/logger');

module.exports = {
    index,
}

function index(req, res) {
    Log.find({}, function(err, logs) {
        res.render('logger/index', { logs });
    })
}