import React, { useRef, useState, useEffect } from 'react';
import Modal from '../../ui_components/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import suspects from '../../../lib/suspect_array';
import addDashesToName from '../../../lib/__utils__/add_dashes_to_name';

const GuessCulprit = () => {
	const modal = useRef(null);
	
	const [answer, setAnswer] = useState(() => {
		return localStorage.getItem('answer');
	});
	
	useEffect(() => {
		localStorage.setItem('answer', answer);
	}, [answer])
	
	function handleClick () {
		modal.current.classList.toggle('modal-show');
	}
	
	function newGame() {
		modal.current.classList.remove('modal-show');
		setAnswer('');
		localStorage.setItem('answer', '');
	
		suspects.forEach(e => { 
			localStorage.removeItem(`${e.name}-action`); 
			localStorage.removeItem(`${e.name}-suspicious`); 
			localStorage.removeItem(`${e.name}-location`); 
			localStorage.removeItem(`${e.name}-relationship`); 
			localStorage.removeItem(`${e.name}-otherCharacters`); 
		});
		
		const initSettings = ['death', 'location', 'culprit', 'hasSession'];
		initSettings.forEach(e => e === 'hasSession' ? localStorage.setItem(e, 'false') : localStorage.setItem(e, ''));
		localStorage.removeItem('clueList');
	}

	function guess(e) {
		const guess = e.target.innerText;
		try {
			if (localStorage.getItem('culprit') === guess) {
				setAnswer(`Correct! It was the ${localStorage.getItem('culprit')}! Congratulations, you super sleuth!`);
				setTimeout(() => {
					setAnswer('Play again?');
				}, 3000);
			} else {
				setAnswer(`Ooo... not quite! Try again.`)
				setTimeout(() => {
					setAnswer('');
				}, 2000);
			}
		} catch (error) {
			console.error(error);
		}
	}

	const mappedSuspects = suspects.map((e) => { 
		return(
			<div className='modal-character'>
				<p style={{cursor:'pointer'}} onClick={guess}>{e.name}</p>
				<img src={`${process.env.PUBLIC_URL}/assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} alt={e.name} className='modal-icon'/>
			</div> 
		);
	});

	return (
		<div>
			<button className='guess-culprit' aria-label='guess-culprit' onClick={handleClick}>
				<p>Guess culprit</p>
				<FontAwesomeIcon icon={faQuestion} />
			</button>
			<Modal ref={modal} onClick={handleClick} grid={mappedSuspects} answer={answer} newGame={newGame}/>
		</div>
	);
}

export default GuessCulprit;