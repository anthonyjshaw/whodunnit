import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Bedroom from '../../../ui_components/svg_components/Bedroom';
import DiningRoom from '../../../ui_components/svg_components/DiningRoom';
import Kitchen from '../../../ui_components/svg_components/Kitchen';
import Location from './Location';
import Lounge from '../../../ui_components/svg_components/Lounge';
import Study from '../../../ui_components/svg_components/Study';

import camelCaseName from '../../../../lib/camel_case_name';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LocationContainer() {
    const {location} = useParams();
    const icon = localStorage.getItem('location') === location ? <FontAwesomeIcon icon={faSkull} /> : "";
    const [clue, setClue] = useState();
    const [clueList, setClueList] = useState(() => {
        return localStorage.getItem(`clueList`) === undefined || localStorage.getItem(`clueList`) === null ? [] : localStorage.getItem(`clueList`).split(',');
    });
    
    const locationSvgs = {
        "lounge": <Lounge mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "diningRoom": <DiningRoom mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "study": <Study mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "kitchen": <Kitchen />,
        "bedroom": <Bedroom />
        
    }
    const locationSvg = locationSvgs[`${camelCaseName(location)}`]
    const mappedClues = (clueList === undefined || clueList === null) ? [] : clueList.filter(e => e !== '').map(e => <li key={clueList.indexOf(e)}><p>{e}</p></li>);
    
    useEffect(() => {
        localStorage.setItem(`clueList`, clueList.join(','))
        document.title = `Whodunnit | Locations | ${location}`;
    })
    
    function handleMouseOver(e) {
        setClue(e.target.dataset.name)
    }

    function handleMouseOut(e) {
        setClue('');
    }

    function handleClick(e) {
        e.preventDefault();
        setClueList((prev) => {
            if (prev.includes(clue)) {
                e.target.setAttribute('disabled', ''); 
                return [...prev];
                } else {
                return [clue, ...prev];
              }
        });
    }

    return (
        <Location clue={clue} location={location} svg={locationSvg} icon={icon}/>
    )
}