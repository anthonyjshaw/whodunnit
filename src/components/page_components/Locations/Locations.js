import {React, useState, useEffect} from 'react';
import { locations } from '../../../lib/locations';
import { Link } from 'react-router-dom';
// import bootstrap from 'bootstrap';
// import  Carousel  from 'react-bootstrap/Carousel';
import { addDashesToName } from '../Characters/Characters';

export default function Locations() {

    const murderLocation = useState(() => {
        return localStorage.getItem('location');
    });

    useEffect(() => {
        document.title = `Whodunnit? | Locations |`;
    })

    let loc = locations.find(e => e === murderLocation[0]);

    const mappedLocations = locations.map(e => {
       const murderLoc = e === loc ? " location" : "";
       return <Link to={`/locations/${e}`} key={locations.indexOf(e) + 1}>
            <div className={`location-card${murderLoc}`} >
                <h2>{e}</h2>
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
            {loc}
        </div>
    )
}