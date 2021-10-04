import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import suspects from '../../../lib/suspect_array';
export default function Homepage(props) {
    
    const [gameText, setGameText] = useState(() => {
        return localStorage.getItem('hasSession') === 'true' ? 'Continue': "Start";
    });
    
    useEffect(() => {
        localStorage.setItem('hasSession', 'true');
        
    });

    function quitGame() {
            const confirm  = window.confirm("Are you sure you want to quit?");
            if (confirm) {
                suspects.forEach(element => {
                    localStorage.removeItem(`${element.name}-suspicious`);
                });
                localStorage.setItem('death', '');
                localStorage.setItem('location', '');
                localStorage.setItem('culprit', '');
                localStorage.setItem('hasSession', 'false');
                localStorage.setItem('display', 'no-display')
                localStorage.removeItem('clueList');
                setGameText('Start');
            } else {
                return;
            }
    } 
    const link = localStorage.getItem('hasSession') === 'true' ? '/characters' : 'crime';
    
    return (
        <div className="container container-fade-in">
            <h1 className="page-header">Whodunnit?</h1>
            <div className="flex flex-column"> 
                <img src="/assets/homepage-logo.svg" alt='homepage icon' className="homepage-icon"/>
                <div className="button-container">
                    <Link to={link}><button className="homepage-btn">{gameText} investigation</button></Link>
                    <button className='homepage-btn' onClick={quitGame}>Quit Game</button>
                </div>
            </div>
        </div>
    );
}