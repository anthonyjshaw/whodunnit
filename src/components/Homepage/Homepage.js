import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage(props) {
    const gameText = '';
    
    return (
        <div className="container">
            <h1 className="page-header">Whodunnit?</h1>
            <Link to='/characters'><button className="homepage-btn">{gameText} Game</button></Link>
        </div>
    );
}