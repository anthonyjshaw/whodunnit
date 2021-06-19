import React from 'react';

class Character extends React.Component {
  render() {
    return (
      <>
      <p>Oh no, {this.props.name} is dead!</p>
      <p>What should we do?</p>
      </>
      );
  }
}


export default Character;
