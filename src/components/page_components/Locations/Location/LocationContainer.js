import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Location from './Location';
import Lounge from '../../../ui_components/svg_components/Lounge';
import DiningRoom from '../../../ui_components/svg_components/DiningRoom';
import camelCaseName from '../../../../lib/camel_case_name';
import Study from '../../../ui_components/svg_components/Study';

export default function LocationContainer() {
    const {location} = useParams();
    const [clue, setClue] = useState();
    const [clueList, setClueList] = useState(() => {
        return localStorage.getItem(`clueList`) === undefined || localStorage.getItem(`clueList`) === null ? [] : localStorage.getItem(`clueList`).split(',');
    });
    
    const locationSvgs = {
        "lounge": <Lounge mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "diningRoom": <DiningRoom mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>,
        "study": <Study mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/>
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
                return prev.filter(t => t !== clue);
              } else {
                return [clue, ...prev];
              }
        });
    }

    return (
        <Location clue={clue} clues={mappedClues} location={location} svg={locationSvg}/>
    )
}