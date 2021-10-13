import {React, useState, useRef} from "react";
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const navItems = useRef(null);
    const [hidden, setHidden] = useState(true);
    
 

    function navbarToggle(e) {
        setHidden(!hidden);
        navItems.current.classList.toggle('navbar-toggle-show');
    }


    const paths = [ 'Crime', 'Characters', 'Locations', 'About', 'Clues'].map(e => <div key={e.replaceAll('/', '')} className="nav-link" onClick={navbarToggle}><Link to={`/${e.toLowerCase()}`}>{e}</Link></div>);
    return (
        <div className="nav-container">
                <div>
                    <button className='navbar-toggle' onClick={navbarToggle}>
                        {hidden ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} /> }
                    </button>
                </div>
                <div className={`nav-links`} ref={navItems} >
                    <div className='nav-link' ><Link to='/'>Home</Link></div>
                {paths}
                </div>
     
        </div>
    )
}