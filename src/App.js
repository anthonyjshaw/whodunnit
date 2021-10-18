import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/page_components/About/About';
import Character from './components/page_components/Characters/Character/Character';
import Characters from './components/page_components/Characters/Characters';
import Clues from './components/page_components/Clues/Clues';
import Crime from './components/page_components/Crime/Crime';
import Footer from './components/page_components/Footer/Footer';
import Homepage from './components/page_components/Homepage/Homepage';
import Interview from './components/page_components/Characters/Character/Interview/Interview';
import IntroContainer from './components/page_components/Intro/IntroContainer';
import Locations from './components/page_components/Locations/Locations';
import LocationContainer from './components/page_components/Locations/Location/LocationContainer';
import Navbar from './components/page_components/Navbar/Navbar';
import './App.scss';
import EmptyDiv from './components/ui_components/EmptyDiv/EmptyDiv';

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
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/intro" component={IntroContainer} /> */}
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/locations/:location" component={LocationContainer}/>
        <Route exact path="/clues" component={Clues} />
      </Switch>
      {/* <EmptyDiv /> */}
      <Footer />
    </div>
  );
}

export default App;
