import {React, useState, useEffect, useRef} from 'react';
import { locations } from '../../../lib/locations';
import { Link } from 'react-router-dom';
import addDashesToName from '../../../lib/add_dashes_to_name';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../ui_components/Card';

export default function Locations() {
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
        index++        
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
        index--
    }

    let loc = locations.find(e => e === murderLocation[0]);
    const icon = e => e === loc ? <FontAwesomeIcon icon={faSkull} className='murder-location'/> : '';
    const murderLoc = e => e === loc ? " location" : "";
    const locationCarousel = locations.map((e) => {
        return (

            <Card icon={icon(e)} link={`/locations/${addDashesToName(e)}`} linkClass={'carousel-item'} key={`${locations.indexOf(e) + 1}: ${e}`} divClass={`location-card${murderLoc(e)}`} image={`assets/locations/${addDashesToName(e.toLowerCase())}.svg`} imageClass='location-card-image' text={e}/>
            // <Link to={`/locations/${addDashesToName(e)}`} key={`${locations.indexOf(e) + 1}: ${e}`} className='carousel-item'>
            // <div className={`location-card${murderLoc(e)}`} >
            //         <h2>{e} {icon(e)}</h2>
            //         <img src={`assets/locations/${addDashesToName(e.toLowerCase())}.svg`} alt={e} className='location-card-image'/>
            //     </div>
            // </Link>
        );
    });


    const mappedLocations = locations.map(e => {
   
       return <Link to={`/locations/${e}`} key={locations.indexOf(e) + 1}>
            <div className={`location-card${murderLoc(e)}`} >
                <h2>{e} {icon(e)}</h2>
                <img src={`/assets/locations/${addDashesToName(e)}.svg`} className='location-card-image' alt={e}/>
            </div>
        </Link>
    });

    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Locations</h1>   
            <div className='carousel-wrapper'>
                    <button className='carousel-button' onClick={moveSlideBack}>&#10094;</button>
                    <div className="carousel" ref={carousel}>
                        {locationCarousel}
                    </div>
                    <button className='carousel-button' onClick={moveSlide}>&#10095;</button>
                </div>
            <div className="location-grid">
                {mappedLocations}
            </div>
        </div>
    )
}