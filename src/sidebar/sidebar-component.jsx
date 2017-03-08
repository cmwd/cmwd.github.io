import React from 'react';
import classNames from 'classnames';

import { Header, TextBlock } from '../ui';
import SidebarLink from './sidebar-link-component';

import './sidebar.css';

export default function SidebarComponent(props) {
  const {
    className,
    title,
    printTitle,
    picture,
    links,
    content,
  } = props;

  return (
    <div className={classNames(className, 'sidebar')}>
      <div className="sidebar__picture-wrapper pure-u-md-4-24">
        <img className="sidebar__picture" src={picture} />
      </div>
      <div className="sidebar__content pure-u-md-20-24">
        <Header
          as="h1"
          className="sidebar__header"
          type="main"
          data-print-content={printTitle}
          children={title}
        />
        <TextBlock
          className="sidebar__introduction"
          children={content.html}
        />
      </div>
      <div
        className="sidebar__links"
        children={links.map((link) => <SidebarLink {...link} />)}
      />
    </div>
  );
}

SidebarComponent.defaultProps = {
  links: [],
};

