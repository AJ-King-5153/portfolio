const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');

// Get visitor statistics
router.get('/stats', async (req, res) => {
    try {
        // Count total unique visitors
        const totalVisitors = await Visitor.countDocuments();
        
        // Count current viewers (active in last 5 minutes)
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        const currentlyViewing = await Visitor.countDocuments({
            lastActive: { $gte: fiveMinutesAgo }
        });

        res.json({
            visitors: totalVisitors,
            currentlyViewing: currentlyViewing
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Record new visitor
router.post('/record', async (req, res) => {
    try {
        const { sessionId } = req.body;
        const ip = req.ip;
        const userAgent = req.headers['user-agent'];

        // Update existing visitor or create new one
        const visitor = await Visitor.findOneAndUpdate(
            { sessionId },
            {
                ip,
                userAgent,
                lastActive: new Date(),
                $setOnInsert: { timestamp: new Date() }
            },
            { upsert: true, new: true }
        );

        res.json(visitor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update visitor's last active timestamp
router.put('/heartbeat', async (req, res) => {
    try {
        const { sessionId } = req.body;
        await Visitor.findOneAndUpdate(
            { sessionId },
            { lastActive: new Date() }
        );
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 