// @flow

import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { Link } from '../ui';
import { screen, media } from '../style';

type SidebarLinkT = {
  href: string;
  iconName: string;
  web?: boolean;
  print?: boolean;
};


const showInPrintScreen = (props: { print: boolean }) => props.print ? null :
  screen.print`
    display: none;
  `;

const showInWebScreen = (props: { web: boolean }) => props.web ? null :
  screen.screen`
    display: none;
  `;

const SidebarLink = styled(Link)`
  padding: 0 0.1em;
  margin: 0 0.2em;

  ${screen.print`
    text-align: left;
    line-height: 1.5em;
    padding: 0;
    margin: 0 1em 0 ;
  `}

  ${showInPrintScreen}
  ${showInWebScreen}
`;


function SidebarLinkComponent (props: SidebarLinkT) {
  const {
    print = false,
    web = true,
    ...rest
  } = props;

  return (
    <SidebarLink
      {...rest}
      print={print}
      web={web}
      key={props.href}
    />
  );
};

export default SidebarLinkComponent;

