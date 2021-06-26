import React from 'react';
import { suspects } from './suspectArray';


class Character extends React.Component {
  render() {
    const suspectList = suspects.map((suspect) => {
      return (
        <li className='profile' key={suspects.indexOf(suspect)}>
        <p>{suspect.profile}<span><a href="#" className='links'>Interview</a></span></p>
        </li>
        );
    })
    return (
      <div>
        <ul>
          {suspectList}
        </ul>
      </div>
      );
  }
}


export default Character;
