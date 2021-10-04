import {React, useState, useEffect} from "react";
import {Link } from 'react-router-dom';

export default function Navbar() {
    const [display] = useState(() => {
        return localStorage.getItem('hasSession') === 'true' ? '' : 'no-display';
    });
    useEffect(() => {
        localStorage.setItem('display', 'display');
    })
    const paths = ['Intro', 'Crime', 'Characters', 'Locations', 'About', 'Clues'].map(e => <div key={e.replaceAll('/', '')} className="nav-link"><Link to={`/${e.toLowerCase()}`}>{e}</Link></div>);
    return (
        <div className="nav-container">
            <div className="container">
                <div className={`nav-links`} >
                    <div className='nav-link'><Link to='/'>Home</Link></div>
                {paths}
                </div>
            </div>
        </div>
    )
}