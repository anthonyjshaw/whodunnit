import React from 'react';
import { useParams } from 'react-router';
import { locations } from '../../../lib/locations';
import { capitalize } from '../../../lib/capitalize';
export default function Location() {
    const {location} = useParams();
    console.log(location)
    const loc = locations.find(e => e === location);

    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">{capitalize(location)}</h1>
            <div>
                
            </div>
        </div>
    )
}