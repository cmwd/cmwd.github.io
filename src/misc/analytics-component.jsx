import React from 'react';
import ReactGA from 'react-ga';

/**
 * @TODO move to env variable
 */
const GA_ID = 'UA-72751097-1';
const SEND_METRICS = process.env.NODE_ENV === 'production';

if (typeof window !== "undefined") {
  ReactGA.initialize(GA_ID);
  ReactGA.set({ page: window.location.pathname });
}

export default function AnalyticsComponentHOC (WrappedComponent, category) {
  return class AnalyticsComponent extends React.Component {
    constructor(props) {
      super(props);
      this.clickHandler = this.clickHandler.bind(this);
    }

    sendEvent(props) {
      if (SEND_METRICS) {
        ReactGA.event(props);
      } else {
        console.info(props);
      }
    }

    clickHandler(event) {
      const { gaLabel: label } = this.props;
      const action = 'Click';

      this.sendEvent({ category, action, label });

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }

    render() {
      const {
        gaLabel,
        ...rest
      } = this.props;

      return (
        <WrappedComponent
          {...rest}
          onClick={this.clickHandler}
        />
      );
    }
  }
};

