import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

import Character from './components/Characters/Character/Character';
import Characters from './components/Characters/Characters';
import Crime from './components/Crime/Crime';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import IntroContainer from './components/Intro/IntroContainer';
import Location from './components/Locations/Location/Location';
import Navbar from './components/Navbar/Navbar';

import './App.css';

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
        <Route exact path="/locations/:location">
           <Location name={useParams()} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
