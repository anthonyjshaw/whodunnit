import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import ExtLink from '../../ui_components/ExtLink/ExtLink';

const Footer = () => {
  const links = [
    {link: 'github.com/anthonyjshaw', icon: faGithub}, 
    {link: 'twitter.com/anthonyjshaw', icon: faTwitter}, 
    {link: 'instagram.com/antjjshaw', icon: faInstagram}, 
    {link: 'linkedin.com/in/anthonyjjshaw', icon: faLinkedin},
  ]
  const mappedLinks = links.map(e => <div className="footer-icon" key={links.indexOf(e) + 1}><ExtLink  link={`https://${e.link}`}><FontAwesomeIcon icon={e.icon}/></ExtLink></div>)
    return (
      <div className='footer-container'>
        <div className="footer">
            {mappedLinks}
        </div>
      </div>
      );
}
export default Footer;
