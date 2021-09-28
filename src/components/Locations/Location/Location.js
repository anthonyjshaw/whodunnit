import React from 'react';
import { useParams } from 'react-router';
import { locations } from '../../../lib/locations';
export default function Location() {
    const {location} = useParams();
    console.log(location)
    const loc = locations.find(e => e === location);

    return (
        <div>
            <h1 className="page-header">{location}</h1>
            <h2>{loc}</h2>
        </div>
    )
}