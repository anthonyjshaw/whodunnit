import React, {useRef, useState, useEffect} from 'react'
import Locations from './Locations';
import { locations } from '../../../lib/locations';
import addDashesToName from '../../../lib/__utils__/add_dashes_to_name';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../ui_components/Card/Card';

const LocationsContainer = () => {
	let index = 1;
    
    const carousel = useRef(null);
   
    useEffect(() => {
        carousel.current.children[index-1].className ='active-item'
        document.title = `Locations`;
    });

    const murderLocation = useState(() => {
        return localStorage.getItem('location');
    });

    
    function moveSlide() {
        if (index > locations.length -1 ) {
            carousel.current.children[index -1].className ='carousel-item';
            index = 0;
            carousel.current.children[index].className ='active-item';
            carousel.current.children[index + 1].className ='carousel-item';
        } else {
            carousel.current.children[index -1].className ='carousel-item';
            carousel.current.children[index].className ='active-item';     
        }
        index++;        
    }


    function moveSlideBack() {
        if (index < 1) {
            index = locations.length;
            carousel.current.children[0].className ='carousel-item';
            carousel.current.children[index].className ='active-item';
        } else {
            carousel.current.children[index -1].className ='active-item';     
            carousel.current.children[index].className ='carousel-item';
        }
        index--;
    }

    let loc = locations.find(e => e === murderLocation[0]);
    const icon = e => e === loc ? <FontAwesomeIcon icon={faSkull} className='murder-location'/> : '';
    const murderLoc = e => e === loc ? " location" : "";

    const locationCarousel = locations.map((e) => {
        return (
            <Card icon={icon(e)} 
            link={`/locations/${addDashesToName(e)}`} 
            linkClass='carousel-item'
            key={`${locations.indexOf(e) + 1}: ${e}`} 
            divClass={`card${murderLoc(e)}`} 
            image={`assets/locations/${addDashesToName(e.toLowerCase())}.svg`} 
            imageClass='location-card-image' 
            text={e}/>
        );
    });


    const mappedLocations = locations.map(e => {
       return <Card icon={icon(e)} 
       link={`/locations/${addDashesToName(e)}`} 
       key={`${locations.indexOf(e) + 1}: ${e}`} 
       divClass={`card${murderLoc(e)}`} 
       image={`${process.env.PUBLIC_URL}/assets/locations/${addDashesToName(e.toLowerCase())}.svg`} 
       imageClass='location-card-image' 
       text={e}/>
    });


	return (
		<Locations click1={moveSlideBack} click2={moveSlide} locations={mappedLocations}>
			<div className="carousel" ref={carousel}>
                {locationCarousel}
            </div>
		</Locations>
	)
}

export default LocationsContainer;