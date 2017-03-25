// @flow

import React from 'react';
import classNames from 'classnames';
import type { Children } from 'react';

import Icon from './icon-component';

type PropsTypesT = {
  className: string;
  bullet?: boolean;
  iconName?: string;
  iconAppend?: boolean;
  children: Children;
};

export default function UiDecorator(WrappedComponent: Children) {
  return (props: PropsTypesT) => {
    const {
      className,
      bullet = false,
      iconName,
      iconAppend = false,
      children,
      ...rest,
    } = props;
    const renderChildren = [children];

    let classes = classNames(className, {
      'ui--bullet': bullet,
    });

    if (iconName) {
      const renderIcon = (<Icon iconName={iconName} />);

      if (iconAppend) {
        renderChildren.push(renderIcon);
      } else {
        renderChildren.unshift(renderIcon);
      }
    }

    return (
      <WrappedComponent
        className={classes} {...rest}
        children={renderChildren}
      />
    );
  }
}

