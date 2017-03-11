import React, { Component } from 'react';
import ReactGA from 'react-ga';

/**
 * @TODO move to env variable
 */
const GA_ID = 'UA-72751097-1';

ReactGA.initialize(GA_ID, {
  debug: process.env.NODE_ENV !== 'production',
});

ReactGA.set({ page: window.location.pathname });

class GAEvent extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  clickHandler() {
    const { gaCategory: category, gaLabel: label } = this.props;
    const action = 'Click';

    ReactGA.event({ category, action, label });
  }

  mouseOver() {
    const { gaCategory: category, gaLabel: label } = this.props;
    const action = 'MouseOver';

    ReactGA.event({ category, action, label });
  }

  render() {
    const {
      component: ChildComponent,
      gaCategory,
      gaLabel,
      ...rest
    } = this.props;

    return (
      <ChildComponent
        {...rest}
        onClick={this.clickHandler}
        onMouseOver={this.mouseOver}
      />
    );
  }
}

export default (childComponent, category) =>
  (props) => (
    <GAEvent
      component={childComponent}
      gaCategory={category}
      {...props}
    />
  )
