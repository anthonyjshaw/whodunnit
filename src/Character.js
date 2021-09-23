import {React, useState} from 'react';
import { suspects } from './suspectArray';
import { useParams } from 'react-router-dom';


export default function Character(props) {
    let { name } = useParams();
    name = removeDashes(name);
    const character = suspects.find(e => e.name === name);
    const suspicious = useState(true);

    return (
      <div className="container">
        <h1>{name}</h1>
        <ul>
          <p>Bio: {character.profile}</p>
          <p>Age: {character.age}</p>
        </ul>
      </div>
    );
  }

function removeDashes(name) {
  return name.replace(/-/g, ' ');
}