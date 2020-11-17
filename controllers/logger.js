const Log = require('../models/logger');

module.exports = {
    index,
    new: newLog,
}

function index(req, res) {
    Log.find({}, function(err, logs) {
        res.render('logger/index', { logs });
    })
}

function newLog(req, res) {
    res.render('logger/new');
}