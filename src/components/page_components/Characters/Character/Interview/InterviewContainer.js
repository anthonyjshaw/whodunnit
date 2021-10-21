import React, { useState, useEffect } from 'react'
import Interview from './Interview';
import { useParams } from 'react-router';
import addDashesToName from '../../../../../lib/__utils__/add_dashes_to_name';
import removeDashes from '../../../../../lib/__utils__/remove_dashes';
import { locations } from '../../../../../lib/locations';
import { actions } from '../../../../../lib/actions';
import { otherCharacters } from '../../../../../lib/other_characters';
import { relationships } from '../../../../../lib/relationships';
import { capitalizeMultipleWords } from '../../../../../lib/__utils__/capitalize_multiple_words';

const InterviewContainer = () => {

	let {name} = useParams();

    name = removeDashes(name);

    const [culprit, setCulprit] = useState(() => {
        return localStorage.getItem('culprit') === removeDashes(name);
    });

    name = capitalizeMultipleWords(name);
    
    let [location, setLocation] = useState(() => localStorage.getItem(`${name}-location`));
    let [action, setAction] = useState(() => localStorage.getItem(`${name}-action`));
    let [relationship, setRelationship] = useState(() => localStorage.getItem(`${name}-relationship`));
    let [otherCharacter, setOtherCharacter] = useState(() => localStorage.getItem(`${name}-otherCharacters`));

    useEffect(() => {
        localStorage.setItem(`${name}-location`, location);
        localStorage.setItem(`${name}-action`, action);
        localStorage.setItem(`${name}-relationship`, relationship);
        localStorage.setItem(`${name}-otherCharacters`, otherCharacter);
    });
    
    function characterLocation() {
        if (culprit) {
            setLocation('garden');
        } else {
            const location = locations[Math.floor(Math.random() * locations.length)]
            console.log(location)
            setLocation(location);
        }
    }
    function characterAction() {
        if (culprit) {
            const action = actions[name]
            setAction('why'); 
        } else {
            const action = actions[Math.floor(Math.random() * actions.length)]
            setAction(action);
        }
    }
    
    
    function characterRelationship() {
        if (culprit) {
            setRelationship('bad');
        } else {
            setRelationship(relationships[Math.floor(Math.random() * relationships.length)]);
        }
    }

    function characterThoughts() {
        if (culprit) {
            setOtherCharacter('no');
        } else {
            setOtherCharacter(otherCharacters[Math.floor(Math.random() * otherCharacters.length)]);
        }
    }
    
    let interviewActions = [ 
        { question: 'Where were you?', answer: location, click: () => characterLocation() }, 
        { question: 'What where you doing?', answer: action, click: () => characterAction() }, 
        { question: "How was your relationship with Marberry?", answer: relationship, click: () => characterRelationship() }, 
        { question: 'Thoughts on other characters?', answer: otherCharacter, click: () => characterThoughts() }
    ];

    let mappedActions = interviewActions.map(e => {
        return <div className="interview-actions" onClick={e.click} key={interviewActions.indexOf(e) + 1}>
                <h2>{e.question}</h2>
                <p>{e.answer === '' || e.answer === 'null'|| e.answer === 'undefined' ? '?' : e.answer }</p>
                </div>
    });
    const newName = name.toLowerCase();

	return (
		<Interview name={name.toLowerCase()} actions={mappedActions} imgSrc={addDashesToName(newName)} newName={newName} />
	);
}

export default InterviewContainer;