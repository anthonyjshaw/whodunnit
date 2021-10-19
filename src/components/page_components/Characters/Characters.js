import React, {useEffect, useRef, useState} from "react";
import suspects from '../../../lib/suspect_array';
import { Link } from 'react-router-dom';
import addDashesToName from "../../../lib/__utils__/add_dashes_to_name";
import Card from "../../ui_components/Card/Card";

export default function Characters(props) {
    // let index = 1;
    // const carousel = useRef(null)
    // const [lastIndex, setLastIndex] = useState(() => {
    //     return localStorage.getItem('lastIndex-character')
    // });
    // useEffect(() => {
    //     localStorage.setItem('lastIndex-character', lastIndex);
    //     console.log(lastIndex)
    //     if (lastIndex !== 1) {
    //         carousel.current.children[index].className = 'carousel-item'
    //         carousel.current.children[0].className ='active-item'
    //     }
    //     document.title = 'Characters';        
    // });

    // const characterGrid = suspects.map((e) => {
    //    return (
    //         <Link to={`/characters/${addDashesToName(e.name)}`} key={`${suspects.indexOf(e) + 1}: ${e.name}`}>
    //             <div className="card">
    //                 <h2>{e.name}</h2>
    //                 <img src={`assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} alt={e.name} className='character-icon'/>
    //             </div>
    //         </Link>
    //     );
    // });


    // const characterCarousel = suspects.map((e) => {
     
    //     return (
    //         <Card linkClass='carousel-item' 
    //         link={`${process.env.PUBLIC_URL}/characters/${addDashesToName(e.name)}`} 
    //         key={`${suspects.indexOf(e) + 1}: ${e.name}`} 
    //         divClass='card' 
    //         text={e.name} 
    //         image={`${process.env.PUBLIC_URL}/assets/character-avis/${addDashesToName(e.name.toLowerCase())}.svg`} 
    //         imageClass='character-icon'/>
    //     );
    // });
 

    // const moveSlide = (n) => {
    //     try {
    //         if (index === suspects.length) {
    //             carousel.current.children[index - n].className ='carousel-item';
    //             index = 0;
    //             carousel.current.children[index].className ='active-item';
    //             carousel.current.children[index + n].className ='carousel-item';
    //         } else {
    //             carousel.current.children[index - n].className ='carousel-item';
    //             carousel.current.children[index].className ='active-item';
    //         }
            
    //     } catch (error) {
    //         console.error(error)
    //     }
    //     index++;
       
    // }

    // function moveSlideBack() {
    //     if (index === 1) {
    //         carousel.current.children[0].className = 'carousel-item';
    //         carousel.current.children[5].className = 'active-item';
    //         index = 6;
    //     } else {
    //         index = index - 1;
    //         carousel.current.children[index].className = 'carousel-item'
    //         carousel.current.children[index - 1].className = 'active-item'; 
    //     }
    // }
    // const carousel = React.forwardRef((props, ref) => (
    //     <div className="carousel" ref={ref}>
    //         {props.carousel}
    //     </div>
    // ));
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Characters</h1>
                <div className="mobile-wrapper">
                    <div className='carousel-wrapper'>
                        <button className='carousel-button' onClick={props.onClick1}>&#10094;</button>
                        {props.children}
                        <button className='carousel-button' onClick={props.onClick2}>&#10095;</button>
                    </div>    
                </div>
            <div className='character-list'>
                {props.grid}
            </div>
        </div>
    );
}


