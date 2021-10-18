import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router';
import addDashesToName from '../../../../../lib/add_dashes_to_name';
import removeDashes from '../../../../../lib/remove_dashes';
import BackArrow from '../../../../ui_components/BackArrow/BackArrow';



export default function Interview(props) {
    let {name} = useParams();
    const [culprit] = useState(() => {
        return localStorage.getItem('culprit') === name;
    });
    let [location, setLocation] = useState(() => localStorage.getItem(`${name}-location`))

    useEffect(() => {
        localStorage.setItem(`${name}-location`, location)
    })

    function characterLocation() {
        if (culprit) {
            setLocation('bed')
        } else {
            setLocation('garden')
        }
    }
    let actions = ['Where were you?', 'What where you doing?', "How was your relationship with Marberry?", 'Thoughts on other characters?'];
    let mappedActions = actions.map(e => {
        return <div className="interview-actions" onClick={characterLocation} key={actions.indexOf(e) + 1}><h2>{e}</h2></div>
    });
    name = removeDashes(name);
    return (
        <div className="container container-fade-in-and-translate">
            <BackArrow link={`characters/${name}`} text={name} />
            <h1 className="page-header">Interview {name}</h1>
            <div className="interview-container">
                <div>
                    <img src={`/assets/character-avis/${addDashesToName(name).tolowerCase()}.svg`} alt={name}/> 
                </div>
                <div className="interview-action-wrapper">
                    {mappedActions}
                </div>
            </div>
            
        </div>
    )
}