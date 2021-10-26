import  React  from 'react';
import { Link } from 'react-router-dom';

export default function Homepage(props) {
    return (
        <div className="container container-fade-in">
            <h1 className="page-header">Whodunnit?</h1>
            <div className="flex flex-column"> 
                <img src="/assets/homepage-logo.svg" alt='homepage icon' className="homepage-icon"/>
                <div className="button-container">
                    <Link to={props.link} onClick={props.newGame}><button className="homepage-btn">{props.gameText} investigation</button></Link>
                    {props.quitButton}
                </div>
            </div>
            <div style={{height:200}}>

            </div>
        </div>
    );
}