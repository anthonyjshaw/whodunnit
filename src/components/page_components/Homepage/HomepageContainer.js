import {React, useState, useEffect, useRef} from 'react';
import { locations } from '../../../lib/locations';
import { murderMethods } from '../../../lib/murder_methods';
import suspects from '../../../lib/suspect_array';
import Homepage from './Homepage';

export default function HomepageContainer() {
    const [gameText, setGameText] = useState(() => {
        return localStorage.getItem('hasSession') === 'true' ? 'Continue': "Start";
    }); 
    const initSettings = ['death', 'location', 'culprit', 'hasSession'];
    
    useEffect(() => {
        document.title = 'Whodunnit? - The murder mystery game!';
    });

    function newGame() {
                localStorage.setItem('hasSession', 'true');
                const random = array => Math.floor(Math.random() * array.length);
                let culprit;
                let death;
                let location;
                if (localStorage.getItem('culprit') === '' || localStorage.getItem('culprit') === null) {
                    culprit = suspects[random(suspects)].name;
                    death = murderMethods[random(murderMethods)];
                    location = locations[random(locations)];
                    localStorage.setItem('culprit', culprit);
                    localStorage.setItem('death', death);
                    localStorage.setItem('location', location);
                }
    }

    function quitGame() {
            const confirm  = window.confirm("Are you sure you want to quit?");
            if (confirm) {
                suspects.forEach(e => localStorage.removeItem(`${e.name}-action`));
                suspects.forEach(e => localStorage.removeItem(`${e.name}-suspicious`));
                suspects.forEach(e => localStorage.removeItem(`${e.name}-location`));
                suspects.forEach(e => localStorage.removeItem(`${e.name}-relationship`));
                suspects.forEach(e => localStorage.removeItem(`${e.name}-otherCharacters`));
                initSettings.forEach(e => e === 'hasSession' ? localStorage.setItem(e, 'false') : localStorage.setItem(e, ''));
                localStorage.removeItem('clueList');
                setGameText('Start');
            } else {
                return;
            }
    } 
    const link = localStorage.getItem('hasSession') === 'true' ? '/characters' : '/crime';

    return (
        <Homepage link={link} newGame={newGame} quitGame={quitGame} gameText={gameText}/>
    );
}