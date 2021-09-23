import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Character from './Character';
import CharactersPage from './CharactersPage';
import Homepage from './Homepage';
import Navbar from './Navbar';
import './App.css';
import Crime from './Crime';

function App() {

  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path='/crime' component={Crime} />
        <Route exact path="/characters" component={CharactersPage} />
        <Route exact path="/characters/:name" component={Character}/>
      </Switch>
    </>
  );
}

export default App;
