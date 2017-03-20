import React, { Component } from 'react';
import classNames from 'classnames';

import { Link } from '../ui';

export type SidebarLinkT = {
  href: string,
  iconName: string,
  web?: boolean,
  print?: boolean,
};

export default function SidebarLinkComponent (props: SidebarLinkT) {
  const {
    print = false,
    web = true,
    ...rest
  } = props;

  const classes = classNames('sidebar__link', {
    'sidebar__link--print-hidden': !print,
    'sidebar__link--web-hidden': !web
  });

  return (
    <Link
      {...rest}
      className={classes}
      key={props.href}
    />
  );
};
