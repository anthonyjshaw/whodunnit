import React from 'react';

export default class Link extends React.Component {
  render() {
    const {href, children} = this.props;
    console.log(this.props);
    return (
        <a href={href}>{children}</a>
      );
  }
}


