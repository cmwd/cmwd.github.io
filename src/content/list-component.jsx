import React, { Component } from 'react';

let keyCnt = 0;

function mergeItems(state, newState) {
  return newState.map((item, index) => ({
    ...item,
    key: state[index] && state[index].key || item.key || `uuid-${keyCnt++}`,
  }));
}

export default class ListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: mergeItems([], props.items),
    };
  }

  componentWillReceiveProps(props) {
    this.setState(({ items }) => ({
      items: mergeItems(items, props.items),
    }));
  }

  render() {
    return (
      <ul
        className="content__list"
      >{this.state.items.map(item => (
        <li
          className="content__list-item"
          key={item.key}
        >{item.content}</li>
      ))}</ul>
    );
  }
}

