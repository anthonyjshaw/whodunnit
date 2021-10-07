import {React, useEffect} from "react";
import suspects from '../../../lib/suspect_array';
import { Link } from 'react-router-dom';
import addDashesToName from "../../../lib/add_dashes_to_name";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Characters() {
    useEffect(() => {
        document.title = 'Characters';
    }) 

    const characterGrid = suspects.map(e => {
        
       return <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`}>
                    <div className="character">
                        <h2>{e.name}</h2>
                        <img src={`assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} alt={e.name} className='character-icon'/>
                    </div>
                </Link>
    });

    const dots = suspects.map(e => {
        return (
            <div key={suspects.indexOf(e)} className='dot'>
                <FontAwesomeIcon icon={faCircle}/>
            </div>
        )
    })

    const characterCarousel = suspects.map(e => {
        return <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`}>
                    <div className="character">
                        <h2>{e.name}</h2>
                        <img src={`assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} alt={e.name} className='character-icon'/>
                    </div>
                </Link>
    })

    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Characters</h1>
                <div>
                    <button>&#10094;</button>
                    <button>&#10095;</button>
                    <div className="carousel">
                        {characterCarousel}
                    </div>
                    <div className='dot-wrapper'>
                        {dots}
                    </div>
                </div>
            <div className='character-list'>
                {characterGrid}
            </div>
        </div>
    );
}


