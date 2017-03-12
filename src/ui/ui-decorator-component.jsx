import React from 'react';
import classNames from 'classnames';

import Icon from './icon-component';

export default function UiDecorator(WrappedComponent) {
  return (props) => {
    const {
      className,
      bullet = false,
      iconName,
      iconAppend = false,
      children,
      ...rest,
    } = props;

    let classes = classNames(className, {
      'ui--bullet': bullet,
    });

    return (
      <WrappedComponent className={classes} {...rest}>
        {!(iconName && !iconAppend) ? null :
          <Icon iconName={iconName} />
        }
        {children}
        {!(iconName && iconAppend) ? null :
          <Icon iconName={iconName} />
        }
      </WrappedComponent>
    );
  }
}

