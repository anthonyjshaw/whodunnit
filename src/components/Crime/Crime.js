import React from 'react';


export default function Crime(props) {
    const deaths = ['poison', 'shooting', 'stabbing', 'pushed out of window']
    const randomDeath = deaths[Math.floor(Math.random() * deaths.length)];
    if (localStorage.death === '') localStorage.setItem('death', randomDeath);
    const death = localStorage.getItem('death');
    function resetDeath() {
        localStorage.setItem('death', '');
    }
    return (
        <div className="container">
        <h1 className="page-header">Crime</h1>
        <p>The lord of the manor is dead.</p>
        <p>Cause of death: {death}</p>
        <p>Start by <a href="#">interviewing the suspects</a></p>
        <button onClick={resetDeath}>Reset</button>
        </div>
        
    );
}