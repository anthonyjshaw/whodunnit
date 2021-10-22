import { React, useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import suspects from '../../../../lib/suspect_array.js';

// __utils
import addDashesToName from '../../../../lib/__utils__/add_dashes_to_name';
import removeDashes from '../../../../lib/__utils__/remove_dashes';
import { capitalizeMultipleWords } from '../../../../lib/__utils__/capitalize_multiple_words';

const Character = lazy(() => import('./Character'));
const renderLoader = () => <p>Loading...</p>;

const CharacterContainer = () => {

  let { name } = useParams();
  name = removeDashes(name);
  const character = suspects.find(e => e.name === capitalizeMultipleWords(name));

  const [location, setLocation] = useState(() => {
    return localStorage.getItem(`${character.name}-location`);
  });
  
  const loc = location === "" || location === null || location === 'undefined' || location === 'null' ? '?' : location;

  useEffect(() => {
    localStorage.setItem(`${character.name}-location`, location);
    document.title = `Characters | ${character.name}`;
  });
    
  const source = `${process.env.PUBLIC_URL}/assets/character-avis/${addDashesToName(character.name).toLowerCase()}.svg`;
  
	return (
    <Suspense fallback={renderLoader()}>
      <Character name={character.name} 
      imgSrc={source} 
      loc={loc}
      link={`/characters/${addDashesToName(character.name.toLowerCase())}/interview`} 
      source={source}
      profile={character.profile}
      age={character.age}/>
    </Suspense>
		);
}

export default CharacterContainer;