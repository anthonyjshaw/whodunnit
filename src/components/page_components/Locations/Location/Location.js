import React from 'react';
import { capitalize } from '../../../../lib/capitalize';


export default function Location(props) {
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">{capitalize(props.location)}</h1>
            <div className='location-wrapper'>
            
                <div className='location-image-wrapper'>
                    <p>Item: {props.clue}</p>  
                        {props.svg}
                    {/* <img src={`/assets/locations/${addDashesToName(location)}.svg`} alt={location} className='location-image'/>  */}
                </div>
                <div>
                    <ul>
                        {props.clues}
                    </ul>
                </div>
            </div>
        </div>
    );
}