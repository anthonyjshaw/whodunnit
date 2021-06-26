import React from 'react';

export default class Intro extends React.Component {
  render() {
    return (
      <div className='intro'>
      <p>The year is 1954.</p>
      <p>Lord Astley of Marberry is dead.</p>
      <p>You are a private investigator hired by the grieving widow to find the culprit.</p>
      <p>You have six suspects:</p>
      <div className='text-left'>
        <ol>
        <li>The wayword son.</li>
        <li>The long suffering butler.</li>
        <li>The maid.</li>
        <li>The French teacher.</li>
        <li>The best friend.</li>
        <li>And of course, the grieving widow herself.</li>
        </ol>
      </div>
      <hr/>
      <p>Use your investigative skills to uncover the mystery of Marberry and find out <span className="whodunnit">"Whodunnit?"</span></p>
      </div>
      )
  }
}
