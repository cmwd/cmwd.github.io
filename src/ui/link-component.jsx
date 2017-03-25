// @flow

import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

import UiDecorator from './ui-decorator-component';
import Analytics from '../misc/analytics-component';
import { screen, COLOR, text } from '../style';

type PropTypesT = {
  target?: string;
  description?: string;
  gaLabel: string;
  className?: string;
};

const Link = styled.a`
  ${text}
  text-decoration: none;
  color: ${COLOR.base00};

  &:hover {
    color: ${COLOR.base002}
  }

  &[data-description] {
    content: attr(data-description);
    margin-left: 0.5em;
  }
`;

function LinkComponent(props: PropTypesT) {
  const {
    target = '_blank',
    description = '',
    gaLabel,
    ...rest
  } = props;
  let attributes = {
    target,
    gaLabel,
  };

  if (description.length) {
    attributes = Object.assign({}, attributes, {
      'data-description': description,
    });
  }

  return (
    <Link
      {...rest}
      {...attributes}
    />
  );
}

export default Analytics(UiDecorator(LinkComponent), 'Link');
