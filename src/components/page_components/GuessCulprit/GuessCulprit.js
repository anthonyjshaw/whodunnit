import React, { forwardRef, useEffect, useRef } from 'react';
import Modal from '../../ui_components/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const GuessCulprit = () => {
	const modal = useRef(null);
	useEffect(() => {
		localStorage.getItem('culprit');
	}, []);

	function handleClick () {
		modal.current.classList.toggle('modal-show');
	}

	return (
		<div>
			<button className='guess-culprit' aria-label='guess-culprit' onClick={handleClick}>
				<p>Guess culprit</p>
				<FontAwesomeIcon icon={faQuestion} />
			</button>
			<Modal ref={modal} onClick={handleClick}/>
		</div>
	)
}

export default GuessCulprit;