import React, { Component } from 'react';

import { TextBlock } from '../ui';

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
        <TextBlock
          bullet
          as="li"
          key={item.key}
          children={item.content}
        />
      ))}</ul>
    );
  }
}

