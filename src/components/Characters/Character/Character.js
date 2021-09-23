import {React, useState} from 'react';
import  suspects  from '../../../lib/suspectArray';
import { useParams } from 'react-router-dom';


export default function Character(props) {
    let { name } = useParams();
    name = removeDashes(name);
    const character = suspects.find(e => e.name === name);
    const [suspicious, setSuspicious] = useState(true);
    function toggleSuspicous(){
      setSuspicious(suspicious => !suspicious)
    }
    return (
      <div className="container">
        <h1>{name}</h1>
        <div>
          <p>Bio: {character.profile}</p>
          <p>Age: {character.age}</p>
          <p>Suspicious? {suspicious ? "Yes": "No"}</p>
        </div>
      </div>
    );
  }

function removeDashes(name) {
  return name.replace(/-/g, ' ');
}