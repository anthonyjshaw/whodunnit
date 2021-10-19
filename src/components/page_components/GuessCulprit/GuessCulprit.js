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
			<button className='guess-culprit' onClick={() => window.alert(`Guess the culprit!`)}>
				<p>guess culprit</p>
				<FontAwesomeIcon icon={faQuestion} />
			</button>
			<div class='guess-modal'>
				<p>It's the...</p>
			</div>
		</div>
	)
}

export default GuessCulprit;