import React, { useState, useEffect } from 'react'
import Interview from './Interview';
import { useParams } from 'react-router';
import addDashesToName from '../../../../../lib/__utils__/add_dashes_to_name';
import removeDashes from '../../../../../lib/__utils__/remove_dashes';

const InterviewContainer = () => {

	let {name} = useParams();
    const [culprit] = useState(() => {
        return localStorage.getItem('culprit') === name;
    });

    let [location, setLocation] = useState(() => localStorage.getItem(`${name}-location`));

    useEffect(() => {
        localStorage.setItem(`${name}-location`, location)
    });

    function characterLocation() {
        if (culprit) {
            setLocation('bed');
        } else {
            setLocation('garden');
        }
    }

    let actions = ['Where were you?', 'What where you doing?', "How was your relationship with Marberry?", 'Thoughts on other characters?'];
    let mappedActions = actions.map(e => {
        return <div className="interview-actions" onClick={characterLocation} key={actions.indexOf(e) + 1}><h2>{e}</h2></div>
    });
    const newName = removeDashes(name).toLowerCase();
	console.log(name.toLowerCase())

	return (
		<Interview name={name.toLowerCase()} actions={mappedActions} imgSrc={addDashesToName(newName)} newName={newName} />
	)
}

export default InterviewContainer;