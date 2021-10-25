import { React, useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import suspects from '../../../../lib/suspect_array.js';

// __utils
import addDashesToName from '../../../../lib/__utils__/add_dashes_to_name';
import removeDashes from '../../../../lib/__utils__/remove_dashes';
import { capitalizeMultipleWords } from '../../../../lib/__utils__/capitalize_multiple_words';

const Character = lazy(() => import('./Character'));
const renderLoader = () => <div>Loading...</div>;

const CharacterContainer = () => {

  let { name } = useParams();
  name = removeDashes(name);
  const character = suspects.find(e => e.name === capitalizeMultipleWords(name));

  const [location, setLocation] = useState(() => {
    return localStorage.getItem(`${character.name}-location`);
  });
  
  const [action, setAction] = useState(() => {
    return localStorage.getItem(`${character.name}-action`);
  })
  
  const loc = location === "" || location === null || location === 'undefined' || location === 'null' ? '?' : location;
  const act = action === "" || action === null || action === 'undefined' || action === 'null' ? '?' : action;

  useEffect(() => {
    localStorage.setItem(`${character.name}-location`, location);
    localStorage.setItem(`${character.name}-action`, action);
    document.title = `Characters | ${character.name}`;
  });
    
  const source = `${process.env.PUBLIC_URL}/assets/character-avis/${addDashesToName(character.name).toLowerCase()}.svg`;
  
	return (
    <Suspense fallback={renderLoader()}>
      <Character name={character.name} 
      imgSrc={source} 
      loc={loc}
      action={act}
      link={`/characters/${addDashesToName(character.name.toLowerCase())}/interview`} 
      source={source}
      profile={character.profile}
      age={character.age}/>
    </Suspense>
		);
}


export default CharacterContainer;