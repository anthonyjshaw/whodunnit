import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Character from './components/Characters/Character/Character';
import Characters from './components/Characters/Characters';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Crime from './components/Crime/Crime';
import IntroContainer from './components/Intro/IntroContainer';

function App() {

  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path='/crime' component={Crime} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/:name" component={Character}/>
        <Route exact path="/intro" component={IntroContainer} />
      </Switch>
    </>
  );
}

export default App;
