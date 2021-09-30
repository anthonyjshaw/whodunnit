import {React, useEffect} from "react";
import suspects from '../../../lib/suspect_array';
import { Link } from 'react-router-dom';

export default function Characters() {
    useEffect(() => {
        document.title = 'Whodunnit? | Characters';
    }) 
    const characterList = suspects.map(e => {
        
       return <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`}>
                <div className="character">
                    <h2>{e.name}</h2>
                    <img src={`assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg` || `https://source.unsplash.com/1600x900/?${addDashesToName(e.name).toLowerCase()}`} alt={e.name} className='character-icon'/>
                </div>
                </Link>
    });
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Characters</h1>
            <div className='character-list'>
                {characterList}
            </div>
        </div>
    );
}

export function addDashesToName(name) {
    return name.replaceAll(/\s/g, '-');
}
