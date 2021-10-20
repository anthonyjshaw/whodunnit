import React from "react";

const About = () => {
    const divStyle = {textAlign: 'center', fontSize: '2em'};
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">About</h1>
            <div style={divStyle}>
                <p>Welcome to Whodunnit, the murder mystery game!</p>
                <p>You play the role of private investigator, hired to solve the murder of an English lord.</p>
                <p>Interview the six suspects, search the different rooms for clues and find out <span>Whodunnit?</span></p>
            </div>
            <hr />
            <div>
                <p>
                    
                </p>
            </div>
            <div style={{height:200}}>

            </div>
        </div>
    );
}

export default About;