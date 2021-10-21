import {React, useState, useRef} from "react";


export default function Navbar(props) {

    return (
        <div className="nav-container">
                <div>
                    <button className='navbar-toggle' onClick={props.click} aria-label="navbar-toggle" style={{color: 'white'}}>
                        {props.isHidden}
                    </button>
                </div>
              {props.children}
     
        </div>
    )
}