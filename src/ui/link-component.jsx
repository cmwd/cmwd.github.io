import React from 'react';
import classNames from 'classnames';

import UiDecorator from './ui-decorator-component';

function Link(props) {
  const {
    as: ElementType = 'a',
    className,
    target = '_blank',
    print,
    ...rest
  } = props;

  const attributes = {
    'data-print': print,
  };
  const classes = classNames(className, 'ui__link', {
    'ui__link--print': !!print,
  });

  return (
    <ElementType
      {...rest}
      {...attributes}
      className={classes}
      target={target}
    />
  );
}

export default UiDecorator(Link);
