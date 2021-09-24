import React from "react";
import {Link } from 'react-router-dom';
export default function Navbar(props) {
    const paths = ['Characters', 'Crime', 'Intro'].map(e => <div key={e.replaceAll('/', '')} className="nav-link"><Link to={`/${e.toLowerCase()}`}>{e}</Link></div>);
    return (
        <div>
            <div className="nav-links">
                <div className='nav-link'><Link to='/'>Home</Link></div>
               {paths}
            </div>
        </div>
    )
}