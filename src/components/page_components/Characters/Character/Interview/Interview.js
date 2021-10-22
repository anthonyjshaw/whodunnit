import React from 'react';
import BackArrow from '../../../../ui_components/BackArrow/BackArrow';
import { capitalizeMultipleWords } from '../../../../../lib/__utils__/capitalize_multiple_words';


export default function Interview(props) {
   
    return (
        <div className="container container-fade-in-and-translate">
            <BackArrow link={`characters/${props.name}`} text={props.newName} />
            <h1 className="page-header">Interview {capitalizeMultipleWords(props.newName)}</h1>
            <div className="interview-container">
                <div className='interview-image-wrapper'>
                    <img src={`/assets/character-avis/${props.imgSrc}.svg`} alt={props.newName}/> 
                </div>
                <div className="interview-action-wrapper">
                    {props.actions}
                </div>
            </div>
            
        </div>
    )
}