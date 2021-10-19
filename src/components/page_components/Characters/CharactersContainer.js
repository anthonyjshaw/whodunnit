import React, {useEffect, useRef, useState} from 'react';
import suspects from '../../../lib/suspect_array';
import { Link } from 'react-router-dom';
import addDashesToName from "../../../lib/__utils__/add_dashes_to_name";
import Card from "../../ui_components/Card/Card";
import Characters from './Characters';

export default function CharactersContainer() {
	let index = 1;
    const [lastIndex, setLastIndex] = useState(() => {
		return localStorage.getItem('lastIndex-character');
    });
	const carousel = useRef(null);
    useEffect(() => {
		
		localStorage.setItem('lastIndex-character', lastIndex);
        if (lastIndex !== 1) {
			    carousel.current.children[index].className = 'carousel-item'
            carousel.current.children[0].className ='active-item'
			}
        document.title = 'Characters';        
    });

    const characterGrid = suspects.map((e) => {
       return (
            <Link to={`/characters/${addDashesToName(e.name.toLowerCase())}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`}>
                <div className="card">
                    <h2>{e.name}</h2>
                    <img src={`${process.env.PUBLIC_URL}/assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} alt={e.name} className='character-icon'/>
                </div>
            </Link>
        );
    });


    const characterCarousel = suspects.map((e) => {
     
        return (
            <Card linkClass={window.innerWidth < 1200? 'carousel-item' : ''} 
            link={`${process.env.PUBLIC_URL}/characters/${addDashesToName(e.name.toLowerCase())}`} 
            key={`${suspects.indexOf(e) + 1}: ${e.name}`} 
            divClass='card' 
            text={e.name} 
            image={`${process.env.PUBLIC_URL}/assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} 
            imageClass='character-icon'/>
        );
    });
 

    const moveSlide = (n) => {
        try {
            if (index === suspects.length) {
                carousel.current.children[index - n].className ='carousel-item';
                index = 0;
                carousel.current.children[index].className ='active-item';
                carousel.current.children[index + n].className ='carousel-item';
            } else {
                carousel.current.children[index - n].className ='carousel-item';
                carousel.current.children[index].className ='active-item';
            }
            
        } catch (error) {
            console.error(error)
        }
        index++;
       
    }

    function moveSlideBack() {
        if (index === 1) {
            carousel.current.children[0].className = 'carousel-item';
            carousel.current.children[5].className = 'active-item';
            index = 6;
        } else {
            index = index - 1;
            carousel.current.children[index].className = 'carousel-item'
            carousel.current.children[index - 1].className = 'active-item'; 
        }
    }

	return (
		<Characters thing={carousel} onClick1={() => moveSlideBack} onClick2={() => moveSlide(1)} grid={characterGrid}>
			<div className="carousel" ref={carousel}>
         		{characterCarousel}
        	</div>
		</Characters>
	)

}