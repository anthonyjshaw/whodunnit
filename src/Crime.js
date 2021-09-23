import React from 'react';


export default function Crime(props) {
    const deaths = ['poison', 'shooting', 'stabbing', 'pushed out of window']
    const death = deaths[Math.floor(Math.random() * deaths.length)];
    return (
        <div className="container">
        <h1>Crime</h1>
        <p>The lord of the manor is dead.</p>
        <p>Cause of death: {death}</p>
        </div>
    );
}