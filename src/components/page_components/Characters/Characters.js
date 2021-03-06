import React, { forwardRef } from "react";


const Characters = forwardRef((props, ref) => {
  
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Characters</h1>
                <div className="mobile-wrapper">
                    <div className='carousel-wrapper'>
                        <button className='carousel-button' onClick={props.onClick1}>&#10094;</button>
                        <div className="carousel" ref={ref}>
         		            {props.carousel}
        	            </div>
                        <button className='carousel-button' onClick={props.onClick2}>&#10095;</button>
                    </div>    
                </div>
            <div className='character-list'>
                {props.grid}
            </div>
        </div>
    );
});

export default Characters;


