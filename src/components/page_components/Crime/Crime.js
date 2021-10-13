import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { murderMethods } from '../../../lib/murder_methods';
import { locations } from '../../../lib/locations';
// import suspects from '../../../lib/suspect_array';

export default function Crime(props) {
    const deaths = murderMethods;
    const location = locations;
    const randomDeath = deaths[Math.floor(Math.random() * deaths.length)];
    const randomLocation = randomDeath === 'pushed out of window' ? location.filter(e => e !== 'garden')[Math.floor(Math.random() * location.length)] : location[Math.floor(Math.random() * location.length)];
    
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
        document.title = "Whodunnit? | Crime";
    })

    const crimeobj = {
        deaths: {
            'stabbing': 'knife.svg',
            'shooting': 'pistol.svg',
            'pushed out of window': 'window.svg',
            'set on fire': 'fire.svg',
            'poison': 'poison.svg'
        },
        location: {
            'kitchen': 'kitchen-crime-icon.svg',
            'study': 'study-crime-icon.svg',
            'dining room': 'dining-room-crime-icon.svg',
            'lounge': 'lounge-crime-icon.svg',
            'garden': 'garden-crime-icon.svg',
            'bedroom': 'bedroom-crime-icon.svg'
        }
    }


    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Crime</h1>
            <div className="crime-wrapper">
                <div className="crime-info">
                <img src="assets/character-avis/lord_of_the_manor.svg" alt="lord of the manor" className="crime-avatar" />
                    <p>Victim: Lord Marberry</p>
                </div>
                <div className='crime-info'>
                    <img src={`/assets/items/${crimeobj.deaths[`${death}`]}`} className='crime-icon' alt={death}/>
                    <p>Cause of death: {death}</p>
                </div>
                <div className='crime-info'>
                    <img src={`/assets/items/${crimeobj.location[`${loc}`]}`} alt={loc} className='crime-icon'/>
                    <p>Location: {loc}</p>
                </div>
            </div>
            <div className="crime-actions">
                <div className='action'>
                    <p>Question suspects</p>
                </div>
                <div className='action'>
                    <p>Visit locations</p>
                </div>
            </div>
            {/* <p>Start by <em><Link to="/characters" className="underline">interviewing the suspects</Link></em> or by <em><Link to={`/locations/${loc}`} className="underline">visiting the crime scene</Link></em></p> */}
        </div>
        
    );
}