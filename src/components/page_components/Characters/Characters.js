import {React, useEffect, useRef} from "react";
import suspects from '../../../lib/suspect_array';
import { Link } from 'react-router-dom';
import addDashesToName from "../../../lib/add_dashes_to_name";
import Card from "../../ui_components/Card";

export default function Characters() {
    let index = 1;
    const carousel = useRef(null)
   
    useEffect(() => {
        console.log(index)
        carousel.current.children[index-1].className ='active-item'
        document.title = 'Characters';        
    });

    const characterGrid = suspects.map((e) => {
       return (
            <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`}>
                <div className="character">
                    <h2>{e.name}</h2>
                    <img src={`assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} alt={e.name} className='character-icon'/>
                </div>
            </Link>
        );
    });


    const characterCarousel = suspects.map((e) => {
     
        return (
            <Card linkClass='carousel-item' link={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`} divClass={`character`} text={e.name} image={`assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} imageClass='character-icon'/>
            //  <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`} className='carousel-item'>
            // <div className={`character`} >
            //         <h2>{e.name}</h2>
            //         <img src={`assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} alt={e.name} className='character-icon'/>
            //     </div>
            // </Link>
        );
    });


    const moveSlide = (n) =>{
        if (index === suspects.length) {
            carousel.current.children[index - n].className ='carousel-item';
            index = 0;
            console.log(index)
            carousel.current.children[index].className ='active-item';
            carousel.current.children[index + n].className ='carousel-item';
        } else {
            console.log(index)
            carousel.current.children[index - n].className ='carousel-item';
            carousel.current.children[index].className ='active-item';     
        }
        index++;
    }
    const pStyle = {
        textAlign: 'center'
    };

    function moveSlideBack() {
        if (index === 1) {
            carousel.current.children[0].className = 'carousel-item';
            carousel.current.children[5].className = 'active-item';
            index = 6;
        } else {
            index = index - 1;
            console.log(index)
            carousel.current.children[index].className = 'carousel-item'
            carousel.current.children[index - 1].className = 'active-item'; 
        }
    }
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Characters</h1>
                <div className="mobile-wrapper">

                <div className='carousel-wrapper'>
                    <button className='carousel-button' onClick={()=> moveSlideBack()}>&#10094;</button>
                    <div className="carousel" ref={carousel}>
                        {characterCarousel}
                    </div>
                    <button className='carousel-button' onClick={()=> moveSlide(1)}>&#10095;</button>
                </div>
                   <p style={pStyle}>Click the {window.innerWidth < 1200 ? 'arrows': 'pictures'} to see character profiles</p>
                </div>
            <div className='character-list'>
                {characterGrid}
            </div>
        </div>
    );
}


