import {React, useState, useEffect} from 'react';
import suspects from '../../../lib/suspect_array';
import Homepage from './Homepage';

export default function HomepageContainer() {
    
    const [gameText, setGameText] = useState(() => {
        return localStorage.getItem('hasSession') === 'true' ? 'Continue': "Start";
    }); 
    const initSettings = ['death', 'location', 'culprit', 'hasSession'];
    
    useEffect(() => {
        localStorage.setItem('hasSession', 'true');
        document.title = 'Whodunnit? - The murder mystery game!';
    });

    function newGame() {
                const random = Math.floor(Math.random() * suspects.length)
                let culprit;
                if (localStorage.getItem('culprit') === '') {
                    culprit = suspects[random].name;
                    localStorage.setItem('culprit', culprit);
                }
    }

    function quitGame() {
            const confirm  = window.confirm("Are you sure you want to quit?");
            if (confirm) {
                suspects.forEach(e => localStorage.removeItem(`${e.name}-suspicious`));
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