import React from 'react';
import { Link } from 'react-router-dom';

const Action = (props) => {
	return (
		<Link to={`${process.env.PUBLIC_URL}/${props.link}`}>
			<div className='action'>
					<img src={`${process.env.PUBLIC_URL}/assets/items/${props.imgSrc}`} alt={props.alt} className='crime-icon'/>
					<p>{props.text}</p>
			</div>
		</Link>
	)
}

export default Action;