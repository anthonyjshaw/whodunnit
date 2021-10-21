import React from "react";
import { Route, Switch } from 'react-router-dom';

// Page Components
import About from './page_components/About/About';
import CharacterContainer from './page_components/Characters/Character/CharacterContainer';
import CharactersContainer from './page_components/Characters/CharactersContainer';
import Clues from './page_components/Clues/Clues';
import CrimeContainer from './page_components/Crime/CrimeContainer';
import FooterContainer from './page_components/Footer/FooterContainer';
import GuessCulprit from './page_components/GuessCulprit/GuessCulprit';
import HomepageContainer from './page_components/Homepage/HomepageContainer';
import InterviewContainer from './page_components/Characters/Character/Interview/InterviewContainer';
import Locations from './page_components/Locations/Locations';
import LocationContainer from './page_components/Locations/Location/LocationContainer';
import NavbarContainer from './page_components/Navbar/NavbarContainer';
import NotFound from './page_components/NotFound/NotFound';

const Routes = () => {
	return (
	<>
		<NavbarContainer />
		<div className='flex-wrapper'>
			<GuessCulprit/>
			<Switch>
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={HomepageContainer} />
				<Route exact path={`${process.env.PUBLIC_URL}/crime`} component={CrimeContainer} />
				<Route exact path={`${process.env.PUBLIC_URL}/characters`} component={CharactersContainer} />
				<Route exact path={`${process.env.PUBLIC_URL}/characters/:name`} component={CharacterContainer} />
				<Route exact path={`${process.env.PUBLIC_URL}/characters/:name/interview`} component={InterviewContainer} />
				<Route exact path={"/about"} component={About} />
				<Route exact path={"/locations"} component={Locations} />
				<Route exact path={"/locations/:location"} component={LocationContainer} />
				<Route exact path={"/clues"} component={Clues} />
				<Route component={NotFound}/>
			</Switch>
		</div>
		<FooterContainer />
	</>
	);
}

export default Routes;