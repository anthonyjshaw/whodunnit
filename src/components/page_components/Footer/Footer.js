import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
      <p>Copyright</p>
      <p>Hey</p>
      <Link to='#top'>Back to top</Link>
      </div>
      );
  }
}
export default Footer;
