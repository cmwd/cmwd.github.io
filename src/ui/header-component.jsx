import React from 'react';
import classNames from 'classnames';

import UiDecorator from './ui-decorator-component';

function Header(props) {
  const {
    as: ElementType = 'h1',
    type,
    className,
    children,
    ...rest
  } = props;

  const classes = classNames(
    className, 'ui--text', 'ui__header', `ui__header--${type}`);

  return (
    <ElementType className={classes} children={children} {...rest} />
  );
}

export default UiDecorator(Header);

