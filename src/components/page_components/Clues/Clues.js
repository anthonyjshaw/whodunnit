import {React, useState} from "react";

export default function Clues() {
    const [clues, setClues] = useState(() => {
        const clues = localStorage.getItem('clueList');
        if (clues) {
            return clues.split(',');
        } else {
            return [];
        }
    })
    const mappedClues = clues.map(e => <div key={clues.indexOf(e) + 1}>{e}</div>)
    return (
        <div className='container container-fade-in-and-translate'>
            <h1 className="page-header">Clues</h1>
            {mappedClues}
        </div>
    )
}