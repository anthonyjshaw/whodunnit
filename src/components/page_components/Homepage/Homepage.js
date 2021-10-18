import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import suspects from '../../../lib/suspect_array';

export default function Homepage() {
    
    const [gameText, setGameText] = useState(() => {
        return localStorage.getItem('hasSession') === 'true' ? 'Continue': "Start";
    }); 
    const initSettings = ['death', 'location', 'culprit', 'hasSession'];
    
    useEffect(() => {
        localStorage.setItem('hasSession', 'true');
        document.title = 'Whodunnit?';
    });

    function newGame() {
                const random = Math.floor(Math.random() * suspects.length)
                const culprit = suspects[random].name;
                localStorage.setItem('culprit', culprit);
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
        <div className="container container-fade-in">
            <h1 className="page-header">Whodunnit?</h1>
            <div className="flex flex-column"> 
                <img src="/assets/homepage-logo.svg" alt='homepage icon' className="homepage-icon"/>
                <div className="button-container">
                    <Link to={link} onClick={newGame}><button className="homepage-btn">{gameText} investigation</button></Link>
                    <button className='homepage-btn' onClick={quitGame}>Quit Game</button>
                </div>
            </div>
        </div>
    );
}