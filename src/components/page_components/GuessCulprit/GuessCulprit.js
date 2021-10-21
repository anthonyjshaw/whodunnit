import React, { useEffect } from 'react';
import Modal from '../../ui_components/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

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
			<Modal />
		</div>
	)
}

export default GuessCulprit;