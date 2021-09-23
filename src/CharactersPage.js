import React from "react";
import {suspects} from './suspectArray';
import {Link } from 'react-router-dom';
export default function CharactersPage() {
    const suspectList = suspects.map(e => <Link to={`/characters/${addDashesToName(e.name)}`}>{e.name}</Link>)
    return (
        <>
        <h1>Characters</h1>
        <ul>
            {suspectList}
        </ul>
        </>
    );
}

function addDashesToName(name) {
    return name.replaceAll(/\s/g, '-');
}