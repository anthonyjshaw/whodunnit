import React from 'react';
import Typed from 'typed.js'
export default class Intro extends React.Component {
    componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      startDelay: 1000,
      backSpeed: 100
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
    const intro = ['The wayword son.', 'The long suffering butler.','The maid.','The French teacher.','The best friend.','And of course, the grieving widow herself.']
    const introList = intro.map((element) => {
      return <li className={`intro-${intro.indexOf(element) + 1}`} key={intro.indexOf(element) + 1}>{element}</li>
    })
    return (
      <div className='intro ' id="intro">
        <span
          style={{ whiteSpace: 'pre' }}
          ref={(el) => { this.el = el; }}
          className='fade-in'
        />
      <div className={'text-left'}>
        <ol>
          {introList}
        </ol>
      </div>
      <hr/>
      <p>Use your investigative skills to uncover the mystery of Marberry and find out <span className="whodunnit">"Whodunnit?"</span></p>
      </div>
      );
  }
}
