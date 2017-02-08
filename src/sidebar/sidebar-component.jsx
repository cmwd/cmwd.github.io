import React from 'react';

import { Header, TextBlock } from '../ui';
import './sidebar.css';

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <img
        className="sidebar__picture"
        src={props.picture}
      />
      <Header
        padded
        centered
        as="h1"
        children={props.title}
      />
      <TextBlock
        padded
        className="sidebar__introduction"
        children={props.description}
      />
    </div>
  );
}

