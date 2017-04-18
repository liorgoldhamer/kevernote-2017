import React, { Component } from 'react';
// import R from 'ramda';
// import api from './api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: false,
      // sets some initial state
    };

    this.doSomething = this.doSomething.bind(this);
  }

  componentDidMount() {
    // when mount
  }

  doSomething() {
    // sets some new state
    this.setState({ something: !this.state.something });
  }

  render() {
    const {
      something,
      // gets some vars from state
    } = this.state;

    return (
      <div>
        <h1>
          Hello Kevernote 2017
        </h1>
        <button onClick={this.doSomething}>Do something</button>
        {something && <h2>I did something!</h2>}
      </div>
    );
  }
}
