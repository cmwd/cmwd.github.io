import React from 'react';
import classNames from 'classnames';

import UiDecorator from './ui-decorator-component';
import Analytics from '../misc/analytics-component';

function Link(props) {
  const {
    as: ElementType = 'a',
    className,
    target = '_blank',
    description = '',
    ...rest
  } = props;

  const attributes = {
    'data-description': description,
  };
  const classes = classNames(className, 'ui__link', {
    'ui__link--description': !!description,
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

export default UiDecorator(Analytics(Link, "link"));
