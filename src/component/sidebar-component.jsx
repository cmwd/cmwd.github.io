// @flow

import React from 'react';

import {
  PictureContainer,
  LinksContainer,
  Link,
  SidebarContainer
} from './styled/sidebar';
import CMSText from './styled/cms-text';

import type { SidebarEntityT } from '../entity/entity-types';

type PropTypesT = SidebarEntityT & {
  md: number;
};

export default (props: PropTypesT) => (
  <SidebarContainer medium={4}>
    <PictureContainer>
      <img src={props.picture} role="presentation" />
    </PictureContainer>
    <CMSText
      {...props}
      centeredHeadline
      children={props.content}
    />
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
  </SidebarContainer>
);
