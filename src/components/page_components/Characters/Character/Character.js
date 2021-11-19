import React from 'react';
import { Link  } from 'react-router-dom';
import BackArrow from '../../../ui_components/BackArrow/BackArrow';
import { capitalizeMultipleWords } from '../../../../lib/__utils__/capitalize_multiple_words';

export default function Character(props) {

    return (
      <div className="container container-fade-in-and-translate">
        <div className='arrow'>
          <BackArrow link="characters" text="characters" />
        </div>
          <h1 className="page-header">{capitalizeMultipleWords(props.name)}</h1>
        <div className='character-profile-wrapper'>
            <img src={props.source} alt={props.name} className='character-profile-icon'/>
          <div className='character-profile'>
            <p>Bio: {props.profile}</p>
            <p>Age: {props.age}</p>
            <p>Location: {props.loc} </p>
            <p>Action at time of death: {props.action} </p>
            <p>
              <em>
                <Link to={props.link} className="underline">
                  Interview
                </Link>
              </em>
            </p>
          </div>    
        </div>
      </div>
    );
  }

