import React from 'react';
import classNames from 'classnames';

import { Header, TextBlock, Link } from '../ui';
import './sidebar.css';

const links = [
  { href: 'mailto:pwojtkowiak@gmail.com', iconName: 'envelope' },
  { href: 'https://github.com/cmwd/', iconName: 'github' },
  { href: 'https://twitter.com/_cmwd/', iconName: 'twitter' },
  {
    href: 'https://www.linkedin.com/in/piotr-wojtkowiak-14397695/',
    iconName: 'linkedin',
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
      <img
        className="sidebar__picture"
        src={picture}
      />
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

