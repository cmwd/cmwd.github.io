// @flow

import React from 'react';
import { Column } from 'hedron';

import { PictureContainer, LinksContainer, Link } from './styled/sidebar';
import CMSText from './styled/cms-text';

import type { SidebarEntityT } from '../entity/entity-types';

type PropTypesT = SidebarEntityT & {
  md: number;
};

export default (props: PropTypesT) => (
  <Column md={props.md} tagName="section">
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
  </Column>
);
