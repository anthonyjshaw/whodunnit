import Typed from 'typed.js';
import React from 'react';

export default class InitTyped extends React.Component {

    componentDidMount(props) {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings, typeSpeed, backSpeed } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="wrap">
          <div className="type-wrap">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </div>
      );
    }
  }