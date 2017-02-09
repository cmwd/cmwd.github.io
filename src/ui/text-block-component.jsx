import React from 'react';
import classNames from 'classnames';

import UiDecorator from './ui-decorator-component';

function TextBlock(props) {
  const {
    as: ElementType = 'span',
    className,
    secondary = false,
    ...rest
  } = props;

  const classes = classNames(
    className,
    'ui__text-block',
    {
      'ui__text-block--secondary': secondary,
    });

  return (
    <ElementType className={classes} {...rest} />
  );
}

export default UiDecorator(TextBlock);
