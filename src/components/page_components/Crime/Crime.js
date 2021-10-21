import React from 'react';


export default function Crime(props) {

    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Crime</h1>
            <div className="crime-wrapper">
                <div className="crime-info">
                <img src={`${process.env.PUBLIC_URL}/assets/character-avis/lord_of_the_manor.svg`} alt="lord of the manor" className="crime-avatar" />
                    <p>Victim: Lord Marberry</p>
                </div>
                <div className='crime-info'>
                    <img src={`${process.env.PUBLIC_URL}/assets/items/${props.deathImg}`} className='crime-icon' alt={props.death}/>
                    <p>Cause of death: {props.death}</p>
                </div>
                <div className='crime-info'>
                    <img src={`${process.env.PUBLIC_URL}/assets/items/${props.locImg}`} alt={props.loc} className='crime-icon'/>
                    <p>Location: {props.loc}</p>
                </div>
            </div>
            <div className="crime-actions">
                {props.actions}
            </div>
        </div>
        
    );
}