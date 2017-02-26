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
      className="content__possition-link"
      href={url}
      children={companyName}
      iconName="external-link"
      iconAppend
    />
    : companyName;

  return (
    <article className="content__possition">
      <header>
        <Header
          className="content__possition-title"
          as="h3"
          type="subsection"
        >
          {position ? `${position} at ` : position}
          {company}
        </Header>
        { !details.length ? null :
            <TextBlock
              secondary
              plain
              className="content__possition-details"
              as="span"
              children={details}
            />
        }
      </header>
      <TextBlock
        as="div"
        className="content__possition-description"
        children={content.html}
      />
      <Highlighter stack={tags}>{(({ mutateClass, set, cancel }) => (
        <TextBlock
          secondary
          plain
          as="div"
          className="content__possition-tagline"
          onMouseLeave={cancel}
          children={tags.map(tag => (
            <span
              className={mutateClass(
                tag,
                'content__possition-tag',
                'content__possition-tag--highlight'
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

