import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Location from './Location';
import removeDashes from '../../../../lib/remove_dashes';
import Bedroom from '../../../ui_components/svg_components/Bedroom';
import DiningRoom from '../../../ui_components/svg_components/DiningRoom';
import Garden from '../../../ui_components/svg_components/Garden';
import Kitchen from '../../../ui_components/svg_components/Kitchen';
import Lounge from '../../../ui_components/svg_components/Lounge';
import Study from '../../../ui_components/svg_components/Study';

import camelCaseName from '../../../../lib/camel_case_name';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LocationContainer() {
    let {location} = (useParams());
    location = removeDashes(location);
    const icon = localStorage.getItem('location') === location ? <FontAwesomeIcon icon={faSkull} /> : "";
    const [clue, setClue] = useState();
    const [clueList, setClueList] = useState(() => {
        return localStorage.getItem(`clueList`) === undefined || localStorage.getItem(`clueList`) === null ? [] : localStorage.getItem(`clueList`).split(',');
    });
    
    const locationSvgs = {
        "lounge": <Lounge mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "diningRoom": <DiningRoom mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "study": <Study mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "kitchen": <Kitchen mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "garden": <Garden mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} />,
        "bedroom": <Bedroom mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>
        
    }
    const locationSvg = locationSvgs[`${camelCaseName(location)}`]

    useEffect(() => {
        localStorage.setItem(`clueList`, clueList.join(','))
        document.title = `Locations | ${location}`;
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