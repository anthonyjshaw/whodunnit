import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <Link to={props.link} className={props.linkClass}>
            <div className={props.divClass} >
                <h2>{props.text} {props.icon}</h2>
                <img src={props.image} className={props.imageClass} alt={props.text}/>
            </div>
        </Link>
    );
}

   //  <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`} className='carousel-item'>
            // <div className={`character`} >
            //         <h2>{e.name}</h2>
            //         <img src={`assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} alt={e.name} className='character-icon'/>
            //     </div>
            // </Link>