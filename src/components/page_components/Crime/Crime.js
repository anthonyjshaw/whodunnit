import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { murderMethods } from '../../../lib/murder_methods';
import { locations } from '../../../lib/locations';
import suspects from '../../../lib/suspect_array';

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

    const [answer, setAnswer] = useState('');

    useEffect(()=> {
        localStorage.setItem('death', death);
        localStorage.setItem('location', loc);
        document.title = "Whodunnit? | Crime";
    })

    function handleClick(e){
        if (e.target.innerText === localStorage.getItem('culprit')) {
            setAnswer('Congratulations, you super sleuth!')
            localStorage.setItem('culprit', '');
        } else {
            setAnswer(`Ooo no, it was the ${localStorage.getItem('culprit')}!`);
        }
    }
    const mappedSuspects = suspects.map(e => <li key={suspects.indexOf(e) + 1} onClick={handleClick}>{e.name}</li>)
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Crime</h1>
            <div className="crime">
                <img src="assets/character-avis/lord_of_the_manor.svg" alt="lord of the manor" className="crime-avatar" />
                <div className="crime-info">
                    <p>Victim: Lord Marberry</p>
                    <p>Cause of death: {death}</p>
                    <p>Location: {loc}</p>
                    <p>Start by <em><Link to="/characters" className="underline">interviewing the suspects</Link></em> or by <em><Link to={`/locations/${loc}`} className="underline">visiting the crime scene</Link></em></p>
                </div>
            

            <div>
                <h2 className="page-header"> 
                    Whodunnit?
                </h2>
                <p>It was the...</p>
                <ul>
                    {mappedSuspects}
                </ul>
                <p>{answer}</p>
            </div>
            </div>
        </div>
        
    );
}