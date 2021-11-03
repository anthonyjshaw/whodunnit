import React, {useState, useEffect, lazy, Suspense} from 'react';
import { culpritClues } from '../../../lib/culprit_clues';
import { locations } from '../../../lib/locations';
import { murderMethods } from '../../../lib/murder_methods';
import suspects from '../../../lib/suspect_array';

const Homepage = lazy(() => import('./Homepage'));

const renderLoader = () => <p>Loading...</p>

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
                    let normalClues = [];
                    suspects.forEach(e => {
                         normalClues.push(culpritClues[e.name].normal);
                    });
                    const newNormalClues = normalClues.sort(() => Math.random() - 0.5).map(e => JSON.stringify(e)).join(', ');
                    localStorage.setItem('normalClues', newNormalClues);
                }

    }

    function quitGame() {
            const confirm  = window.confirm("Are you sure you want to quit?");
            if (confirm) {
                suspects.forEach(e => { 
                    localStorage.removeItem(`${e.name}-action`); 
                    localStorage.removeItem(`${e.name}-suspicious`); 
                    localStorage.removeItem(`${e.name}-location`); 
                    localStorage.removeItem(`${e.name}-relationship`); 
                    localStorage.removeItem(`${e.name}-otherCharacters`); 
                });
                
                initSettings.forEach(e => e === 'hasSession' ? localStorage.setItem(e, 'false') : localStorage.setItem(e, ''));
                localStorage.removeItem('clueList');
                localStorage.removeItem('normalClues');
                localStorage.removeItem('answer');
                setGameText('Start');
            } else {
                return;
            }
    } 
    const link = localStorage.getItem('hasSession') === 'true' ? '/characters' : '/crime';
    const hasSession = localStorage.getItem('hasSession') === 'true';
    const quitButton = hasSession ? <button className='homepage-btn' onClick={quitGame}>Quit Game</button> : '';
   
    
    return (
        <Suspense fallback={renderLoader()}>
            <Homepage link={link} newGame={newGame} quitGame={quitGame} quitButton={quitButton} gameText={gameText}/>
        </Suspense>
    );
}