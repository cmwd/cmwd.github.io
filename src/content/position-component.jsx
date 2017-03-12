import React from 'react';
import { format } from 'date-fns';

import { Header, TextBlock, Link } from '../ui';
import Highlighter from '../highlighter/highlighter-container';
import Analytics from '../misc/analytics-component';

const DATE_FORMAT = 'MM-YYYY';
const SLUG_REGEX = /[\s\.]/g;

const toSlug = (string) =>
  string.replace(SLUG_REGEX, '_').toLowerCase();

const Hashtag = Analytics((props) => (
  <span {...props} />
), 'Hashtag');

export default function Position(props) {
  const {
    position,
    companyName,
    location,
    content,
    start,
    end,
    dateFormat = DATE_FORMAT,
    current,
    url,
    tags: tagsRaw,
  } = props;
  const tags = tagsRaw.map(tag => tag.toLowerCase());
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
    <article className="content__position">
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
      <Highlighter stack={tags}>{(({ getClassName, set, cancel }) => (
        <TextBlock
          secondary
          plain
          as="div"
          className="content__position-tagline"
          onMouseLeave={cancel}
          children={tags.map(tag => (
            <Hashtag
              gaLabel={tag}
              className={getClassName(
                tag,
                'content__position-tag',
                'content__position-tag--highlight')}
              onMouseEnter={set(tag)}
              children={tag}
              data-tag={tag}
              key={tag}
            />
          ))}
        />
      ))}</Highlighter>
    </article>
  );
}

Position.defaultProps = {
  tags: [],
};

