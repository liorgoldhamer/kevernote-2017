import React, { Component } from 'react';

export default class ActionBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="action-bar">
        <div className="action-bar__logo"></div>
        <button className="action-bar__new">+</button>
      </nav>
    );
  }
}
