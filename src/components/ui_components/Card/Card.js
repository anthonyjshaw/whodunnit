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

   