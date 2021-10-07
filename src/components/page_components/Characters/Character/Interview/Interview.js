import React from 'react';
import { useParams } from 'react-router';
import addDashesToName from '../../../../../lib/add_dashes_to_name';
import removeDashes from '../../../../../lib/remove_dashes';
import BackArrow from '../../../../ui_components/BackArrow/BackArrow';


export default function Interview(props) {
    let {name} = useParams();
    let actions = ['Where were you?', 'What where you doing?', "How was your relationship with Marberry?", 'Thoughts on other characters?'];
    let mappedActions = actions.map(e => {
        return <div className="interview-actions" key={actions.indexOf(e) + 1}><h2>{e}</h2></div>
    });
    name = removeDashes(name);
    return (
        <div className="container container-fade-in-and-translate">
            <BackArrow link={`characters/${name}`} text={name} />
            <h1 className="page-header">Interview {name}</h1>
            <div className="interview-container">
                <div>
                    <img src={`/assets/character-avis/${addDashesToName(name)}.svg`} alt={name}/> 
                </div>
                <div className="interview-action-wrapper">
                    {mappedActions}
                </div>
            </div>
            
        </div>
    )
}