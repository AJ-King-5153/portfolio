const mongoose = require('mongoose');
const crypto = require('crypto');

const visitorSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    ipHash: String,
    browser: String,
    os: String,
    sessionId: String,
    lastActive: {
        type: Date,
        default: Date.now
    }
});

// Pre-save middleware to hash IP address
visitorSchema.pre('save', function(next) {
    if (this.ip) {
        this.ipHash = crypto
            .createHash('sha256')
            .update(this.ip + process.env.IP_SALT || 'default-salt')
            .digest('hex');
        this.ip = undefined;
    }
    next();
});

module.exports = mongoose.model('Visitor', visitorSchema); 