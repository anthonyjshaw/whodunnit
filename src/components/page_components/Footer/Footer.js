import React from 'react';


const Footer = (props) => {
    return (
      <div className='footer-container'>
        <div className="footer">
            {props.links}
        </div>
      </div>
      );
}
export default Footer;
