import {React, useState, useEffect} from 'react';
import  suspects  from '../../../../lib/suspect_array';
import { Link, useParams } from 'react-router-dom';
// import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { addDashesToName } from '../Characters';

export default function Character(props) {
    let { name } = useParams();
    name = removeDashes(name);
    const character = suspects.find(e => e.name === name);
    const [suspicious, /*setSuspicious*/] = useState(() => {
      return localStorage.getItem(`${character.name}-suspicious`);
    });

    useEffect(() => {
      localStorage.setItem(`${character.name}-suspicious`, suspicious);
      document.title = `Whodunnit? | Characters | ${character.name}`;
    });
    // function isSuspicous(){
    //   setSuspicious('true');
    // }
    // function notSuspicious(){
    //   setSuspicious('false');
    // }

    const source = `/assets/character-avis/${addDashesToName(character.name)}.svg`
    return (
      <div className="container container-fade-in-and-translate">
        <h1 className="page-header">{name}</h1>
        <div className='character-profile-wrapper'>
            <img src={source} alt={`${character.name}`}/>
          <div className='character-profile'>
            <p>Bio: {character.profile}</p>
            <p>Age: {character.age}</p>
            <Link to={`/characters/${addDashesToName(character.name)}/interview`}><p><em>Interview</em></p></Link>
          </div>
          {/* <div>
            <FontAwesomeIcon className="check character-icon" icon={faCheck} onClick={isSuspicous}/>
            <FontAwesomeIcon className="cross character-icon" icon={faTimes} onClick={notSuspicious}/>
          </div> */}
          
        </div>
      </div>
    );
  }

export function removeDashes(name) {
  return name.replace(/-/g, ' ');
}