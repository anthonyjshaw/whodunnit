import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { murderMethods } from '../../lib/murderMethods';
import { locations } from '../../lib/locations';


export default function Crime(props) {
    const deaths = murderMethods;
    const location = locations;
    const randomDeath = deaths[Math.floor(Math.random() * deaths.length)];
    const randomLocation = location[Math.floor(Math.random() * location.length)];
    
    if (localStorage.death === '') localStorage.setItem('death', randomDeath);
    if (localStorage.location === '') localStorage.setItem('location', randomLocation);
    const [death, setDeath] = useState(() => {
        return localStorage.getItem('death');
    });
    const [loc, setLoc] = useState(() => {
        return localStorage.getItem('location');
    });

    useEffect(()=> {
        localStorage.setItem('death', death);
        localStorage.setItem('location', loc);
    })
    
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Crime</h1>
            <div className="crime">
                <img src="/lord_of_the_manor.svg" alt="lord of the manor" className="avatar" />
                <div>
                    <p>Victim: Lord Marberry</p>
                    <p>Cause of death: {death}</p>
                    <p>Location: {loc}</p>
                    <p>Start by <Link to="/characters">interviewing the suspects</Link></p>
                </div>
            </div>
        </div>
        
    );
}