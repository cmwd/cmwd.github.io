// @flow

import React from 'react';
import { format } from 'date-fns';

import EntityComponent from './entity-component';
import TagLine from './tagline-component';
import { Header, TextBlock, Link, DateRange, DetailsBar } from '../ui';

import type { PositionEntityT } from '../entity/entity-types';

const SLUG_REGEX = /[\s\.]/g;

const toSlug = (value = '') =>
  value.replace(SLUG_REGEX, '_').toLowerCase();

export default function PositionComponent(props: PositionEntityT) {
  const company = props.url
    ? <Link
      className="content__position-link"
      href={props.url}
      children={props.companyName}
      iconName="external-link"
      iconAppend
      gaLabel={toSlug(props.companyName)}
    />
  : <span>{props.companyName}</span>;

  return (
    <EntityComponent modifier="position">
      <header>
        <Header
          className="content__position-title"
          as="h3"
          type="subsection"
        >
          {!props.position ? null :
            <span>{props.position}</span>
          }
          {!props.position ? company :
              (<span className="content__position-company-name">
                <span>at </span>{company}
              </span>)
          }
        </Header>
        <DetailsBar>
          <DateRange start={props.start} end={props.end} />
          {props.location}
        </DetailsBar>
      </header>
      <TextBlock
        as="div"
        className="content__description"
        children={props.content}
      />
    <TagLine tags={props.tags} />
    </EntityComponent>
  );
}

PositionComponent.defaultProps = {
  tags: []
};
