// @flow

import React from 'react';

import { PictureContainer, LinksContainer, Link } from './styled/sidebar';
import CMSText from './styled/cms-text';

import type { SidebarEntityT } from '../entity/entity-types';

export default (props: SidebarEntityT) => (
  <div className="pure-u-md-3-8">
    <PictureContainer>
      <img src={props.picture} role="presentation" />
    </PictureContainer>
    <CMSText>{props.content}</CMSText>
    <LinksContainer>
      {props.links.map(({
        web = true,
        print = false,
        ...link
      }) => (

        <Link
          href={link.href}
          web={web}
          print={print}
          data-description={link.description}
          key={link.iconName}
        >
          <i className={`fa fa-${link.iconName}`} />
        </Link>

      ))}
    </LinksContainer>
  </div>
);
