import {React, useState, useEffect} from 'react';
import { locations } from '../../../lib/locations';
import { Link } from 'react-router-dom';
// import bootstrap from 'bootstrap';
// import  Carousel  from 'react-bootstrap/Carousel';
import addDashesToName from '../../../lib/add_dashes_to_name';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Locations() {
    const murderLocation = useState(() => {
        return localStorage.getItem('location');
    });

    useEffect(() => {
        document.title = `Locations`;
    })

    let loc = locations.find(e => e === murderLocation[0]);

    const mappedLocations = locations.map(e => {
       const murderLoc = e === loc ? " location" : "";
       let icon = e === loc ? <FontAwesomeIcon icon={faSkull} className='murder-location'/> : '';
       console.log(icon);
       
       return <Link to={`/locations/${e}`} key={locations.indexOf(e) + 1}>
            <div className={`location-card${murderLoc}`} >
                <h2>{e} {icon}</h2>
                
                <img src={`/assets/locations/${addDashesToName(e)}.svg`} className='location-card-image' alt={e}/>
            </div>
        </Link>
    });
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Locations</h1>   
           
            <div className="location-grid">
                {mappedLocations}
            </div>
        </div>
    )
}