import React from 'react';

import './App.scss';
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
        <Intro />
        <h2>Profiles</h2>
        <Character />
      </header>
    </div>
  );
}

export default App;
