import React from "react";
import suspects from '../../lib/suspectArray';
import {Link } from 'react-router-dom';
export default function Characters() {
    const suspectList = suspects.map(e => <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: {${e.name}`}><div className="suspect">{e.name}</div></Link>)
    return (
        <div className="container">
        <h1 className="page-header">Characters</h1>
        <div className='suspect-list'>
            {suspectList}
        </div>
        </div>
    );
}

function addDashesToName(name) {
    return name.replaceAll(/\s/g, '-');
}