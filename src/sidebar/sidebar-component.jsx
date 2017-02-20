import React from 'react';
import classNames from 'classnames';

import { Header, TextBlock, Link } from '../ui';

import './sidebar.css';

const links = [
  {
    href: 'mailto:pwojtkowiak@gmail.com',
    iconName: 'envelope',
    print: 'pwojtkowiak@gmail.com',
  },
  {
    href: 'https://github.com/cmwd/',
    iconName: 'github',
    print: 'cmwd',
  },
  {
    href: 'https://twitter.com/_cmwd/',
    iconName: 'twitter',
    print: '@_cmwd',
  },
  {
    href: 'https://www.linkedin.com/in/piotr-wojtkowiak-14397695/',
    iconName: 'linkedin',
    print: 'piotr-wojtkowiak-14397695',
  }
];

export default function Sidebar(props) {
  const {
    className,
    title,
    picture,
    description,
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
          children={title}
        />
        <TextBlock
          className="sidebar__introduction"
          children={description}
        />
      </div>
      <div
        className="sidebar__links"
        children={links.map(props =>
          <Link
            {...props}
            className="sidebar__link"
            key={props.iconName}
          />)}
        />
      </div>
  );
}

