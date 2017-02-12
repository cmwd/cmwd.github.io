import React from 'react';
import classNames from 'classnames';

import UiDecorator from './ui-decorator-component';

function Link(props) {
  const {
    as: ElementType = 'a',
    className,
    target = '_blank',
    ...rest
  } = props;

  const classes = classNames('ui__link', className);

  return (
    <ElementType
      {...rest}
      className={classes}
      target={target}
    />
  );
}

export default UiDecorator(Link);
