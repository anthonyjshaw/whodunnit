import React from "react";
import {Link } from 'react-router-dom';
export default function Navbar(props) {
    const paths = ['Characters', 'Crime', 'Intro'].map(e => <li key={e.replaceAll('/', '')} className="nav-link"><Link to={`/${e.toLowerCase()}`}>{e}</Link></li>);
    return (
        <div>
            <ul>
                <li className='nav-link'><Link to='/'>Home</Link></li>
               {paths}
            </ul>
        </div>
    )
}