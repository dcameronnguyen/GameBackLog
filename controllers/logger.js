const Log = require('../models/logger');

module.exports = {
    index,
    new: newLog,
    create,
}

function index(req, res) {
    Log.find({}, function(err, logs) {
        res.render('logger/index', { logs });
    })
}

function newLog(req, res) {
    res.render('logger/new');
}

function create(req, res) {
    Log.create(req.body, function(err, log) {
        console.log(err);
        res.redirect('/logs');
    })
}