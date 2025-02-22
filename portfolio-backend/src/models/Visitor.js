const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    ip: String,
    userAgent: String,
    sessionId: String,
    lastActive: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Visitor', visitorSchema); 