import React from 'react';
import { format } from 'date-fns';

import { Header, TextBlock, Link } from '../ui';
import Highlighter from '../highlighter/highlighter-container';

const DATE_FORMAT = 'MM-YYYY';

export default function Position(props) {
  const {
    position,
    companyName,
    location,
    content,
    start,
    end,
    current,
    url,
    tags: tagsRaw,
  } = props;
  const tags = tagsRaw.map(tag => tag.toLowerCase());
  const endDate = current ? 'present' : format(end, DATE_FORMAT);
  const details = [
    start ? `${endDate} - ${format(start, DATE_FORMAT)}` : '',
    location ? ` / ${location}` : '',
  ].join('');
  const company = url
    ? <Link
      className="content__position-link"
      href={url}
      children={companyName}
      iconName="external-link"
      iconAppend
    />
    : companyName;

  return (
    <article className="content__position">
      <header>
        <Header
          className="content__position-title"
          as="h3"
          type="subsection"
        >
          {position}
          {!position ? company :
            <span className="content__position-company-name">at {company}</span>
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
      <Highlighter stack={tags}>{(({ mutateClass, set, cancel }) => (
        <TextBlock
          secondary
          plain
          as="div"
          className="content__position-tagline"
          onMouseLeave={cancel}
          children={tags.map(tag => (
            <span
              className={mutateClass(
                tag,
                'content__position-tag',
                'content__position-tag--highlight'
              )}
              key={tag}
              data-tag={tag}
              onMouseEnter={(event) => set(event.target.dataset.tag)}
              children={tag}
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

