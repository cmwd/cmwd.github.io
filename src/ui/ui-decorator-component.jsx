import React from 'react';
import classNames from 'classnames';

export default function UiDecorator(Component) {
  return (props) => {
    const {
      className,
      padded = false,
      centered = false,
      ...rest,
    } = props;

    const classes = classNames(className, {
      'ui--padded': padded,
      'ui--centered': centered,
    });

    return (<Component className={classes} {...rest} />);
  }
}

