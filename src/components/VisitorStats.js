import React, { useState, useEffect } from 'react';
import '../styles/visitorStats.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/visitors';

const VisitorStats = () => {
    const [stats, setStats] = useState({
        visitors: 0,
        currentlyViewing: 0
    });

    useEffect(() => {
        // Generate a session ID if not exists
        if (!localStorage.getItem('sessionId')) {
            localStorage.setItem('sessionId', Math.random().toString(36).substring(7));
        }
        
        const sessionId = localStorage.getItem('sessionId');

        // Record visit
        const recordVisit = async () => {
            try {
                const baseUrl = API_BASE_URL.replace('/api/visitors', '');
                const response = await fetch(`${baseUrl}/api/visitors/record`, {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ sessionId }),
                });
                if (!response.ok) {
                    const errorData = await response.text();
                    console.error('Server response:', errorData);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Visit recorded:', data);
        } catch (error) {
                console.error('Error recording visit:', error);
        }
    };

        // Fetch stats
        const fetchStats = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/stats`);
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        // Heartbeat to update last active timestamp
        const sendHeartbeat = async () => {
            try {
                await fetch(`${API_BASE_URL}/heartbeat`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ sessionId }),
                });
            } catch (error) {
                console.error('Error sending heartbeat:', error);
            }
        };

        recordVisit();
        fetchStats();

        // Set up intervals for updates
        const statsInterval = setInterval(fetchStats, 30000);
        const heartbeatInterval = setInterval(sendHeartbeat, 60000);

        return () => {
            clearInterval(statsInterval);
            clearInterval(heartbeatInterval);
        };
    }, []);

    return (
        <div className="visitor-stats">
            <div className="stat-item">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                    <div className="stat-value">{stats.visitors}</div>
                    <div className="stat-label">Total Visitors</div>
                </div>
            </div>
            <div className="stat-item">
                <div className="stat-icon">👀</div>
                <div className="stat-content">
                    <div className="stat-value">{stats.currentlyViewing}</div>
                    <div className="stat-label">Currently Viewing</div>
                </div>
            </div>
        </div>
    );
};

export default VisitorStats; 
