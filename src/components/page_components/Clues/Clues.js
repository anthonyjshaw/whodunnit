import React, { useState } from "react";

export default function Clues() {
    const [clues, setClues] = useState(() => {
        const clues = localStorage.getItem('clueList');
        if (clues) {
            return clues.split(',');
        } else {
            return [];
        }
    });
    const mappedClues = clues.length === 0 ? <p style={{height:200, fontSize: '2em'}}>No clues!</p> : clues.map(e => <div key={clues.indexOf(e) + 1}>{e}</div>)
    return (
        <div className='container container-fade-in-and-translate'>
            <h1 className="page-header">Clues</h1>
            {mappedClues}
            <div style={{height: 400}}>

            </div>
        </div>
    );
};