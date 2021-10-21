import React, {useState, useRef, useEffect} from 'react';
import {Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavbarContainer = () => {
	const navItems = useRef(null);
    const [hidden, setHidden] = useState(true);
	const [pointer, setPointer] = useState('');
    function navbarToggle(e) {
		setHidden(!hidden);
        navItems.current.classList.toggle('navbar-toggle-show');
    }
	
	useEffect(() => {
		const item = navItems.current;
		if(localStorage.getItem('hasSession') === 'true') {
			setPointer('auto');
		} else if (localStorage.getItem('hasSession') === 'false') {
			setPointer('none');
		}
		item.style.pointerEvents = pointer;
	}, [pointer]);

	const paths = ['Crime', 'Characters', 'Locations', 'About', 'Clues'].map(e => <div key={e.replaceAll('/', '')} className="nav-link" onClick={navbarToggle}><Link to={`/${e.toLowerCase()}`}>{e}</Link></div>);
	const isHidden = hidden ? <FontAwesomeIcon icon={faBars} className="white"/> : <FontAwesomeIcon icon={faTimes}  className="white"/> 
	
	return (
		<Navbar click={navbarToggle} isHidden={isHidden}>
			  <div className={`nav-links`} ref={navItems} >
                        <div className='nav-link' onClick={navbarToggle}><Link to='/'>Home</Link></div>
                        {paths}
                </div>
		</Navbar>
	)
}

export default NavbarContainer;