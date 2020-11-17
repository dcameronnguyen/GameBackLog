const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loggerSchema = new Schema({
    userId: String,
    gameTitle: String,
    platform: {
        type: String,
        enum: ['PC', 'Playstation 4', 'Playstation 5', 'Xbox One X', 'Xbox Series S', 'Xbox Series X', 'Switch']
    },
    completionStatus: {
        type: String,
        enum: ['To Play', 'In Progress', 'Completed']
    },
    userRating: String,
}, { timestamps: true});

module.exports = mongoose.model('Log', loggerSchema);