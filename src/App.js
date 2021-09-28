import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Character from './components/Characters/Character/Character';
import Characters from './components/Characters/Characters';
import Crime from './components/Crime/Crime';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Interview from './components/Characters/Character/Interview/Interview';
import IntroContainer from './components/Intro/IntroContainer';
import Location from './components/Locations/Location/Location';
import Locations from './components/Locations/Locations';
import Navbar from './components/Navbar/Navbar';

import './App.scss';

function App() {

  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path='/crime' component={Crime} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/:name" component={Character}/>
        <Route exact path="/characters/:name/interview" component={Interview} />
        <Route exact path="/intro" component={IntroContainer} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/locations/:location" component={Location}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
