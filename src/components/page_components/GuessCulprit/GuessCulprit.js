import React, {useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { width } from 'dom-helpers';

const GuessCulprit = () => {
	
	useEffect(() => {
		localStorage.getItem('culprit');
	}, []);

	return (
		<div>
			<button className='guess-culprit' onClick={() => window.alert(`It's the ${localStorage.getItem('culprit')}!`)}>
				<p>guess culprit</p>
				<FontAwesomeIcon icon={faQuestion} />
			</button>
			<div>
				
			</div>
		</div>
	)
}

export default GuessCulprit;