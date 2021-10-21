import {React, useState, useEffect} from 'react';
import suspects from '../../../../lib/suspect_array.js';
import Character from './Character';
import { useParams } from 'react-router-dom';
import addDashesToName from '../../../../lib/__utils__/add_dashes_to_name';
import removeDashes from '../../../../lib/__utils__/remove_dashes';
import { capitalizeMultipleWords } from '../../../../lib/__utils__/capitalize_multiple_words';


const CharacterContainer = () => {
	let { name } = useParams();
    name = removeDashes(name);
    const character = suspects.find(e => e.name === capitalizeMultipleWords(name));
    const [suspicious, setSuspicious] = useState(() => {
      return localStorage.getItem(`${character.name}-suspicious`);
    });

    const [location, setLocation] = useState(() => {
      return localStorage.getItem(`${character.name}-location`);
    });

    const loc = location === "" ? '?' : location;
    useEffect(() => {
      localStorage.setItem(`${character.name}-suspicious`, suspicious);
      localStorage.setItem(`${character.name}-location`, location);
      document.title = `Characters | ${character.name}`;
    });
    
    const source = `${process.env.PUBLIC_URL}/assets/character-avis/${addDashesToName(character.name).toLowerCase()}.svg`;

	return (
		<Character name={character.name} 
		imgSrc={source} 
		loc={loc}
		link={`/characters/${addDashesToName(character.name)}/interview`} 
		source={source}
		profile={character.profile}
		age={character.age}/>
		);
}

export default CharacterContainer;