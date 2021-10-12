import React from "react";
import { Link } from "react-router-dom";
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackArrow(props) {
    return (
        <Link to={`/${props.link}`} className="back-arrow"><FontAwesomeIcon icon={faArrowLeft} className='back-arrow-icon'/> <span><strong>Back to {props.text}</strong></span></Link>
    )
}