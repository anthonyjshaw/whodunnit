import React, { forwardRef } from 'react';
import { capitalize } from '../../../../lib/__utils__/capitalize';
import BackArrow from '../../../ui_components/BackArrow/BackArrow';


const Location = forwardRef((props, ref) => {

    const pStyle = {
        textAlign: 'center'
    };

    return (
        <div className="container container-fade-in-and-translate">
            <div className='arrow'>
                <BackArrow link="locations" text='locations'/>
            </div>
            <h1 className="page-header">{capitalize(props.location)} {props.icon}</h1>
            <div className='location-wrapper'>
                <div className='location-image-wrapper'>
                    <p>Check: <span className="location-clue">{props.clue}</span></p>  
                    {props.svg}
                </div>
            </div>
            <p style={pStyle}>Hover over the picture to look for clues!</p>
            <div className='location-clue-popup' ref={ref}>
                <p>Clue added: {props.clueName}</p>
                <img src={props.clueImg} className="popup-icon" alt={props.clueName}/>
            </div>
        </div>
    );
});

export default Location;