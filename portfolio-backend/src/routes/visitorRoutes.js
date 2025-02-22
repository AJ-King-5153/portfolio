const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');
const UAParser = require('ua-parser-js');

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
        console.error('Error fetching stats:', error);
        res.status(500).json({ message: "Error fetching statistics" });
    }
});

// Record new visitor
router.post('/record', async (req, res) => {
    try {
        const { sessionId } = req.body;
        const parser = new UAParser(req.headers['user-agent']);
        const userAgent = parser.getResult();

        const visitor = await Visitor.findOneAndUpdate(
            { sessionId },
            {
                browser: `${userAgent.browser.name} ${userAgent.browser.major}`,
                os: userAgent.os.name,
                lastActive: new Date(),
                $setOnInsert: { timestamp: new Date() }
            },
            { upsert: true, new: true }
        );

        res.json({ success: true });
    } catch (error) {
        console.error('Error recording visit:', error);
        res.status(500).json({ message: "Error recording visit" });
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
        console.error('Error updating heartbeat:', error);
        res.status(500).json({ message: "Error updating activity" });
    }
});

module.exports = router; 