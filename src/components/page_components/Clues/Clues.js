import React from "react";
import { Link } from "react-router-dom";

export default function Clues(props) {
    const clues = !props.mappedClues ? 
    <p style={{ height: 200, fontSize: '2em', textAlign: 'center' }}>
        No clues! Why don't you <Link to="/locations">search for some clues?</Link>
    </p> : 
    <div className="clue-grid">{props.mappedClues}</div>;

    return (
        <div className='container container-fade-in-and-translate'>
            <h1 className="page-header">Clues</h1>
            {clues}
            <div style={{ height: 400 }}>
            </div>
        </div>
    );
};