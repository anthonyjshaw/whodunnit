import React, {useEffect, useState} from 'react';
import Crime from "./Crime";
import { murderMethods } from '../../../lib/murder_methods';
import { locations } from '../../../lib/locations';
import Action from '../../ui_components/Action/Action';

const CrimeContainer = () => {

	const deaths = murderMethods;
    const location = locations;
    const randomDeath = deaths[Math.floor(Math.random() * deaths.length)];
    const randomLocation = randomDeath === 'pushed out of window' ? location.filter(e => e !== 'garden')[Math.floor(Math.random() * location.length)] : location[Math.floor(Math.random() * location.length)];
    
    if (localStorage.location === ''|| localStorage.location === null) localStorage.setItem('location', randomLocation);
    if (localStorage.death === '' || localStorage.death === null) localStorage.setItem('death', randomDeath);
    
    const [death, setDeath] = useState(() => {
        return localStorage.getItem('death');
    });

    const [loc, setLoc] = useState(() => {
        return localStorage.getItem('location');
    });
    
    useEffect(()=> {
		console.log(death)
        localStorage.setItem('death', death);
        localStorage.setItem('location', loc);
        document.title = "Crime";
    });

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
    };

	const actions = [{link: `characters`, text: 'Question suspects', alt: 'question clip art', src: 'question.svg'}, {link: `locations/${loc}`, text: 'Visit crime scene', alt: 'chalk outline', src:'chalk-outline.svg'}];
    const mappedActions = actions.map((e) => {
		return <Action key={actions.indexOf(e) + 1} link={e.link} text={e.text} alt={e.alt} imgSrc={e.src}/>
	});

	return (
		<Crime deathImg={crimeobj.deaths[`${death}`]} 
		locImg={crimeobj.location[`${loc}`]} 
		actions={mappedActions} 
		death={death} 
		loc={loc}/>
	)
}

export default CrimeContainer;