import React from 'react';
import classNames from 'classnames';

import UiDecorator from './ui-decorator-component';

function TextBlock(props) {
  const {
    as: ElementType = 'div',
    className,
    secondary = false,
    plain = false,
    children,
    ...rest
  } = props;

  const classes = classNames(
    className,
    'ui--text',
    'ui__text-block',
    {
      'ui__text-block--secondary': secondary,
    });

  const content = {};

  if (plain) {
    Object.assign(content, { children });
  } else {
    Object.assign(content, {
      dangerouslySetInnerHTML: { __html: children.join('') },
    });
  }

  return (
    <ElementType
      className={classes}
      {...rest}
      {...content}
    />
  );
}

export default UiDecorator(TextBlock);
