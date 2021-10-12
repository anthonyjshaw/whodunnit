import {React, useState, useEffect} from 'react';
import suspects from '../../../lib/suspect_array';
import Homepage from './Homepage';

export default function HomepageContainer() {
    const [gameText, setGameText] = useState(() => {
        return localStorage.getItem('hasSession') === 'true' ? 'Continue': "Start";
    });
    
    useEffect(() => {
        localStorage.setItem('hasSession', 'true');
        localStorage.setItem('death', '');
        localStorage.setItem('location', '');
        localStorage.setItem('culprit', '');
    });

    function newGame() {
        const random = Math.floor(Math.random() * suspects.length)
        const culprit = suspects[random].name;
        if (localStorage.getItem('culprit') === '' || localStorage.getItem('culprit') === null ) localStorage.setItem('culprit', culprit);
        console.log(localStorage);
    }

    function quitGame() {
            const confirm  = window.confirm("Are you sure you want to quit?");
            if (confirm) {
                suspects.forEach(element => {
                    localStorage.removeItem(`${element.name}-suspicious`);
                });
                const initSettings = ['death', 'location', 'culprit', 'hasSession'];
                initSettings.forEach(e => {
                    e === 'hasSession' ? localStorage.setItem(e, 'false') : localStorage.setItem(e, '')
                });
                localStorage.setItem('display', 'no-display')
                localStorage.removeItem('clueList');
                setGameText('Start');
            } else {
                return;
            }
    } 
    const link = localStorage.getItem('hasSession') === 'true' ? '/characters' : 'crime';
    return (
        <Homepage link={link} newGame={newGame} quitGame={quitGame} buttonText={gameText}/>
    )
}