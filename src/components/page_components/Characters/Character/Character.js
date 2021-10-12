import {React, useState, useEffect} from 'react';
import  suspects  from '../../../../lib/suspect_array';
import { Link, useParams } from 'react-router-dom';
import BackArrow from '../../../ui_components/BackArrow/BackArrow';
import addDashesToName from '../../../../lib/add_dashes_to_name';
import removeDashes from '../../../../lib/remove_dashes';


export default function Character(props) {
    let { name } = useParams();
    name = removeDashes(name);
    const character = suspects.find(e => e.name === name);
    const [suspicious, setSuspicious] = useState(() => {
      return localStorage.getItem(`${character.name}-suspicious`);
    });


    let [location, setLocation] = useState(() => {
      return localStorage.getItem(`${character.name}-location`);
    })

    console.log(location);

    const loc = location === "" ? '?' : `${location}`;
    
    useEffect(() => {
      localStorage.setItem(`${character.name}-suspicious`, suspicious);
      localStorage.setItem(`${character.name}-location`, '');
      document.title = `Characters | ${character.name}`;
    });
    

    const source = `/assets/character-avis/${addDashesToName(character.name)}.svg`
    return (
      <div className="container container-fade-in-and-translate">
        <div className='arrow'>
          <BackArrow link="characters" text="characters" />
        </div>
          <h1 className="page-header">{name}</h1>
        <div className='character-profile-wrapper'>
            <img src={source} alt={`${character.name}`} className='character-profile-icon'/>
          <div className='character-profile'>
            <p>Bio: {character.profile}</p>
            <p>Age: {character.age}</p>
            <p>Location: {loc} </p>
            <p>Action at time of death: ? </p>
            <p>Possible motive: ?</p>
            <p><em><Link to={`/characters/${addDashesToName(character.name)}/interview`} className="underline">Interview</Link></em></p>
          </div>    
        </div>
      </div>
    );
  }

