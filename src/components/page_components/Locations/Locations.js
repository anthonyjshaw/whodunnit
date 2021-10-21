import React from 'react';


export default function Locations(props) {
   
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Locations</h1>   
            <div className='carousel-wrapper'>
                    <button className='carousel-button' onClick={props.click1}>&#10094;</button>
                    {props.children}
                    <button className='carousel-button' onClick={props.click2}>&#10095;</button>
                </div>
            <div className="location-grid">
                {props.locations}
            </div>
        </div>
    )
}