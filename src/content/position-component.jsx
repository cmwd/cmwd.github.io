// @flow
import React from 'react';
import { format } from 'date-fns';

import EntityComponent from './entity-component';
import { Header, TextBlock, Link } from '../ui';
import TagLine from './tagline-component';

const DATE_FORMAT = 'MM-YYYY';
const SLUG_REGEX = /[\s\.]/g;

export type PositionEntityT = {
  categorySlug: string,
  layout: "position",

  position: string,
  companyName: string,
  location: string,
  dateFormat?: string,
  content: any,
  start: number,
  end: number,
  current: boolean,
  url: string,
  tags: Array<string>
};

const toSlug = (value = '') =>
  value.replace(SLUG_REGEX, '_').toLowerCase();

export default function Position(props: PositionEntityT) {
  const {
    position,
    companyName,
    location,
    content = {},
    start,
    end,
    dateFormat = DATE_FORMAT,
    current,
    url,
    tags = [],
  } = props;

  const endDate = current ? 'present' : format(end, dateFormat);
  const details = [
    start ? `${endDate} - ${format(start, dateFormat)}` : '',
    location ? ` / ${location}` : '',
  ].join('');
  const company = url
    ? <Link
      className="content__position-link"
      href={url}
      children={companyName}
      iconName="external-link"
      iconAppend
      gaLabel={toSlug(companyName)}
    />
    : <span>{companyName}</span>;

  return (
    <EntityComponent modifier="position">
      <header>
        <Header
          className="content__position-title"
          as="h3"
          type="subsection"
        >
          {!position ? null :
            <span>{position}</span>
          }
          {!position ? company :
              (<span className="content__position-company-name">
                <span>at </span>{company}
              </span>)
          }
        </Header>
        { !details.length ? null :
            <TextBlock
              secondary
              plain
              className="content__position-details"
              as="span"
              children={details}
            />
        }
      </header>
      <TextBlock
        as="div"
        className="content__position-description"
        children={content.html}
      />
    <TagLine tags={tags} />
    </EntityComponent>
  );
}
