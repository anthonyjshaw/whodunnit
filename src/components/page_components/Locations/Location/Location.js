import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import { locations } from '../../../lib/locations';
import { capitalize } from '../../../../lib/capitalize';
import { addDashesToName } from '../../Characters/Characters';

export default function Location() {
    const {location} = useParams();
    const [clue, setClue] = useState();
    const [clueList, setClueList] = useState(() => {
        return localStorage.getItem(`clueList`) === undefined || localStorage.getItem(`clueList`) === null ? [] : localStorage.getItem(`clueList`).split(',');
    });

    useEffect(() => {
        localStorage.setItem(`clueList`, clueList.join(','))
        document.title = `Whodunnit | Locations | ${location}`;
    })

    function handleMouseOver(e) {
        setClue(e.target.className.baseVal)
    }

    function handleClick(e) {
        e.preventDefault();

        setClueList((prev) => {
            console.log(prev)
            if (prev.includes(clue)) {
                // filter the clicked topping out of state
                return prev.filter(t => t !== clue);
              } else {
                // add the clicked topping to our state
                return [clue, ...prev];
              }
        });
    }

    const obj = <object type="image/svg+xml" data={`/assets/locations/${addDashesToName(location)}.svg`} className="location-image">{location}</object>
    console.log(obj);
    const mappedClues = clueList === undefined || clueList === null ? [] : clueList.filter(e => e !== '').map(e => <li key={clueList.indexOf(e)}><p>{e}</p></li>);
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">{capitalize(location)}</h1>
            <div className='location-wrapper'>
                <div className='location-image-wrapper'>
                    <p>Item: {clue}</p>
                    {obj}
                    {/* <img src={`/assets/locations/${addDashesToName(location)}.svg`} alt={location} className='location-image'/>  */}
                </div>
                <div>
                    <ul>
                        {mappedClues}
                    </ul>
                </div>
            </div>
        </div>
    )
}