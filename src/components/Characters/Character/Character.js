import {React, useState, useEffect} from 'react';
import  suspects  from '../../../lib/suspectArray';
import { useParams } from 'react-router-dom';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { addDashesToName } from '../Characters';
export default function Character(props) {
    let { name } = useParams();
    name = removeDashes(name);
    const character = suspects.find(e => e.name === name);
    const [suspicious, setSuspicious] = useState(() => {
      return localStorage.getItem(`${character.name}-suspicious`);
    });

    useEffect(() => {
      localStorage.setItem(`${character.name}-suspicious`, suspicious)
    })
    function isSuspicous(){
      setSuspicious('true');
    }
    function notSuspicious(){
      setSuspicious('false');
    }

    const source = `/${addDashesToName(character.name)}.svg`
    console.log(source);
    return (
      <div className="container">
        <h1>{name}</h1>
        <div>
          <img src={source} alt={`${character.name}`}/>
          <p>Bio: {character.profile}</p>
          <p>Age: {character.age}</p>
          <p>Suspicious? {suspicious === 'true' ? "Yes": "No"}</p>
          <div>
            <FontAwesomeIcon className="check" icon={faCheck} onClick={isSuspicous}/>
            <FontAwesomeIcon className="cross" icon={faTimes} onClick={notSuspicious}/>
          </div>
        </div>
      </div>
    );
  }

function removeDashes(name) {
  return name.replace(/-/g, ' ');
}