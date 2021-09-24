import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { murderMethods } from '../../lib/murderMethods';

export default function Crime(props) {
    const deaths = murderMethods;
    const randomDeath = deaths[Math.floor(Math.random() * deaths.length)];
    if (localStorage.death === '') localStorage.setItem('death', randomDeath);
    const [death, setDeath] = useState(() => {
        return localStorage.getItem('death');
    });

    useEffect(()=> {
        localStorage.setItem('death', death);
    })
    function resetDeath() {
        localStorage.setItem('death', '');
        setDeath('');
    }
    return (
        <div className="container">
            <h1 className="page-header">Crime</h1>
            <div className="crime">
                <img src="/lord_of_the_manor.svg" alt="lord of the manor" className="avatar" />
                <div>
                    <p>Victim: .</p>
                    <p>Cause of death: {death}</p>
                    <p>Location</p>
                    <p>Start by <Link to="/characters">interviewing the suspects</Link></p>
                </div>
            </div>
            <button onClick={resetDeath}>Reset</button>
        </div>
        
    );
}