import React from 'react';
import classNames from 'classnames';

import Icon from './icon-component';

export default function UiDecorator(Component) {
  return (props) => {
    const {
      className,
      padded = false,
      centered = false,
      bullet = false,
      iconName,
      iconAppend = false,
      children,
      ...rest,
    } = props;

    let classes = classNames(className, {
      'ui--padded': padded,
      'ui--centered': centered,
      'ui--bullet': bullet,
    });

    return (
      <Component className={classes} {...rest}>
        {!(iconName && !iconAppend) ? null :
          <Icon iconName={iconName} />
        }
        {children}
        {!(iconName && iconAppend) ? null :
          <Icon iconName={iconName} />
        }
      </Component>
    );
  }
}

