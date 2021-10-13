import React from 'react';
import { capitalize } from '../../../../lib/capitalize';
import BackArrow from '../../../ui_components/BackArrow/BackArrow';

const pStyle = {
    textAlign: 'center'
}
export default function Location(props) {
    return (
        <div className="container container-fade-in-and-translate">
            <div className='arrow'>
                <BackArrow link="locations" text='locations'/>
            </div>
            <h1 className="page-header">{capitalize(props.location)} {props.icon}</h1>
            <div className='location-wrapper'>
                <div className='location-image-wrapper'>
                    <p>Check: {props.clue}</p>  
                        {props.svg}
                    {/* <img src={`/assets/locations/${addDashesToName(location)}.svg`} alt={location} className='location-image'/>  */}
                </div>
                <div>
                </div>
            </div>
            <p style={pStyle}>Hover over the picture to look for clues!</p>
        </div>
    );
}