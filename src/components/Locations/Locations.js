import {React, useState} from 'react';
import { locations } from '../../lib/locations';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';
import  Carousel  from 'react-bootstrap/Carousel';
import { addDashesToName } from '../Characters/Characters';

export default function Locations() {
    const murderLocation = useState(() => {
        return localStorage.getItem('location');
    })
    let loc = locations.find(e => e === murderLocation[0]);
    console.log(loc)

    const mappedLocations = locations.map(e => {
      
       return <Link to={`/locations/${e}`} key={locations.indexOf(e) + 1}>
            <div className="location-card" >
                <h2>{e}</h2>
                <img src={`/assets/locations/${addDashesToName(e)}.svg`} className='location-image' alt={e}/>
            </div>
        </Link>
    });
    const carouselLocations = locations.map(e => <Link to={`/locations/${e}`} key={locations.indexOf(e)}><div className="location-carousel-card"><h2>{e}</h2></div></Link>)
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Locations</h1>   
            {/* <div className="location-carousel-wrapper">
            <div className="location-carousel">
                {carouselLocations}
                <div className="carousel__button--next"></div>
                <div className="carousel__button--prev"></div>
            </div>
            </div> */}
            <div className="location-grid">
                {mappedLocations}
            </div>
                {loc}
        </div>
    )
}