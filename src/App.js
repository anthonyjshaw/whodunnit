import React from 'react';

import './App.css';
import  Character from './Character';
// import Footer  from './Footer';
// import Link from './Link';
import Intro from './Intro';
import Logo from './Logo';

function App() {

  return (
   <div className="App">
      <header className="App-header">
        <Logo />
        <Intro strings={['The year is 1954.<br/>Lord Astley of Marberry is dead.<br/>You are a private investigator.<br/>Find the culprit.<br/>You have six suspects:']}/>
        <h2>Profiles</h2>
        <Character />
      </header>
    </div>
  );

}

export default App;
