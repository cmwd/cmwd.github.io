import React, { Component, PropTypes } from 'react';

let subscribbers = [];
let current = null;

function set(value) {
  current = value;
  subscribbers.forEach(fn => fn(value));
}

function subscribe(fn) {
  subscribbers.push(fn);
}

function get() {
  return current;
}

export default class Highighter extends Component {
  state = {
    highlight: false,
  };

  constructor(props) {
    super(props);

    subscribe((current) =>
      this.setState({
        highlight: props.stack.includes(current),
      }));
  }

  render() {
    const { highlight } = this.state;

    return this.props.children({
      highlight,
      highlighting: get() !== null,
      set: set,
      cancel: () => set(null)
    });
  }
}

