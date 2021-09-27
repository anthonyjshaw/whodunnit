import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import suspects from '../../lib/suspectArray';
export default function Homepage(props) {
    
    const [gameText, setGameText] = useState(() => {
        return localStorage.getItem('hasSession') === 'true' ? 'Continue': "Start";
    });

    useEffect(() => {
        localStorage.setItem('hasSession', 'true');
    })

    function quitGame() {
        if (window.confirm('Are you sure you want to quit?')) {
            localStorage.removeItem('hasSession')
        suspects.forEach(element => {
            localStorage.removeItem(`${element.name}-suspicious`);
        });
        localStorage.setItem('death', '');
        localStorage.setItem('location', '');
        setGameText('New');
        }
        
    } 
    
    return (
        <div className="container">
            <h1 className="page-header">Whodunnit?</h1>
            <img src="/homepage-logo.svg" alt='homepage icon'/>
            <Link to='/characters'><button className="homepage-btn">{gameText} investigation</button></Link>
            <button className='homepage-btn' onClick={quitGame}>Quit Game</button>
        </div>
    );
}