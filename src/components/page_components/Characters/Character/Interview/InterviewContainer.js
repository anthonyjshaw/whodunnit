import React, { useState, useEffect } from 'react'
import Interview from './Interview';
import { useParams } from 'react-router';

// __utils__
import addDashesToName from '../../../../../lib/__utils__/add_dashes_to_name';
import { capitalizeMultipleWords } from '../../../../../lib/__utils__/capitalize_multiple_words';
import removeDashes from '../../../../../lib/__utils__/remove_dashes';

// Scenario variables
import { scenarios } from '../../../../../lib/scenarios';
import { culpritLocations } from '../../../../../lib/culprit_locations';


const InterviewContainer = () => {

	let { name } = useParams();

    name = capitalizeMultipleWords(removeDashes(name));
    console.log(name)

    name = capitalizeMultipleWords(name);

    const [death, setDeath] = useState(() => {
        return localStorage.getItem('death');
    })

    let [location, setLocation] = useState(() => localStorage.getItem(`${name}-location`));
    let [action, setAction] = useState(() => localStorage.getItem(`${name}-action`));
    let [relationship, setRelationship] = useState(() => localStorage.getItem(`${name}-relationship`));
    let [otherCharacter, setOtherCharacter] = useState(() => localStorage.getItem(`${name}-otherCharacters`));
  
    const scenario = scenarios(name, localStorage.getItem('culprit'), death);

    useEffect(() => {
        localStorage.setItem(`${name}-location`, location);
        localStorage.setItem(`${name}-action`, action);
        localStorage.setItem(`${name}-relationship`, relationship);
        localStorage.setItem(`${name}-otherCharacters`, otherCharacter);
    });

    const obj = { 
        'location': setLocation, 
        'action': setAction, 
        'relationship': setRelationship, 
        'otherCharacter': setOtherCharacter
    };

    function seeAnswer(act, val) {
        obj[act](val);    
    }

    const interviewActions = [ 
        { 
            question: 'Where were you?', 
            answer: location, 
            click: () => seeAnswer('location', scenario.location || (culpritLocations.normal)) 
        }, 
        { 
            question: 'What where you doing?', 
            answer: action, 
            click: () => seeAnswer('action', scenario.action) 
        }, 
        { 
            question: "How was your relationship with Marberry?", 
            answer: relationship, 
            click: () => seeAnswer('relationship', scenario.relationship) 
        }, 
        { 
            question: 'Thoughts on other characters?', 
            answer: otherCharacter, 
            click: () => seeAnswer('otherCharacter', scenario.otherCharacter) 
        }
    ];

    const mappedActions = interviewActions.map(e => {
        return <div className="interview-actions" onClick={e.click} key={interviewActions.indexOf(e) + 1}>
                <h2>{e.question}</h2>
                <p>{e.answer === '' || e.answer === 'null'|| e.answer === 'undefined'  ? '?' : e.answer}</p>
                </div>
    });

    const newName = name.toLowerCase();

	return (
		<Interview name={name.toLowerCase()} actions={mappedActions} imgSrc={addDashesToName(newName)} newName={newName} />
	);
}

export default InterviewContainer;