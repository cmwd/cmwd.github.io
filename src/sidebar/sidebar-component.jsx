import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__picture">
        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=me&w=150&h=200" />
      </div>
      <h1>Hello world, I'm Piotr!</h1>
      <span className="sidebar__introduction">
        I’m a web developer passionate about creating rich, scalable applications. I also love to learn new techs and helping others to learn awesome things.
      </span>
    </div>
  );
}

