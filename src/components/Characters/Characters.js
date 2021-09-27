import React from "react";
import suspects from '../../lib/suspectArray';
import {Link } from 'react-router-dom';

export default function Characters() {
    const characterList = suspects.map(e => {
        
       return <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`}>
            <div className="character">
                <h2>{e.name}</h2>
                <img src={`${addDashesToName(e.name.toLowerCase())}.svg` || `https://source.unsplash.com/1600x900/?${addDashesToName(e.name).toLowerCase()}`} alt={e.name}/>
            </div>
        </Link>
    });
    return (
        <div className="container">
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
