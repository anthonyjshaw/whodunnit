import React from 'react';
import { useParams } from 'react-router';
import { removeDashes } from '../Character';
import { addDashesToName } from '../../Characters';
export default function Interview(props) {
    let {name} = useParams();
    name = removeDashes(name);
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Interview {name}</h1>
            <div>
                <img src={`/assets/character-avis/${addDashesToName(name)}.svg`} alt={name}/> 
                <ul>
                    <li className="interview-quotes">hey</li>
                    <li className="interview-quotes">HYou</li>
                </ul>
            </div>
        </div>
    )
}