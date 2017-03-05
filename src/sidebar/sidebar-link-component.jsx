import React, { Component } from 'react';
import classNames from 'classnames';

import { Link } from '../ui';

export default class SidebarLinkComponent extends Component {
  constructor(props) {
    super(props);

    this.actions = {
      print: this.printDocument.bind(this),
    }
  }

  printDocument(event) {
    event.preventDefault();
    window.print();
  }

  render() {
    const {
      action,
      print = false,
      iconName,
    } = this.props;

    const clickHandler = this.actions[action] || null;
    const classes = classNames('sidebar__link', {
      'sidebar__link--print-hidden': !print,
    });

    return (
      <Link
        {...this.props}
        onClick={clickHandler}
        className={classes}
        key={this.props.iconName}
      />
    );
  }
}

