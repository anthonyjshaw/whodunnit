import React from "react";

export default function Clues(props) {

    return (
        <div className='container container-fade-in-and-translate'>
            <h1 className="page-header">Clues</h1>
            <div className="clue-grid">
                {props.mappedClues}
            </div>
            <div style={{ height: 400 }}>
            </div>
        </div>
    );
};