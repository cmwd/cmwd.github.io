import React from 'react';
import classNames from 'classnames';

import { Header, TextBlock, Link } from '../ui';
import { Column } from '../layout';

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
      <Column
        className="sidebar__picture-wrapper"
        unit={24}
        col={4}
      >
        <img
          className="sidebar__picture"
          src={picture}
        />
      </Column>
      <Column
        className="sidebar__content"
        unit={24}
        col={20}
      >
        <Header
          padded
          centered
          as="h1"
          className="sidebar__header"
          children={title}
        />
        <TextBlock
          padded
          centered
          className="sidebar__introduction"
          children={description}
        />
      </Column>
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

