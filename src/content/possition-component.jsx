import React from 'react';
import classNames from 'classnames';

import { Header, TextBlock, Link } from '../ui';
import Highlighter from '../highlighter';

export default function Possition(props) {
  const {
    possition,
    name,
    location,
    description,
    start,
    end,
    url,
    tags: tagsRaw,
  } = props;
  const tags = tagsRaw.map(tag => tag.toLowerCase());
  const details = [
    end && start ? `${end} - ${start}` : '',
    location ? ` / ${location}` : '',
  ].join('');
  const companyName = url
    ? <Link
      className="content__possition-link"
      href={url}
      children={name}
      iconName="external-link"
      iconAppend
    />
    : name;

  return (
    <article className="content__possition">
      <header>
        <Header
          className="content__possition-title"
          as="h3"
        >
          {possition ? `${possition} at ` : possition}
          {companyName}
        </Header>
        { !details.length ? null :
            <TextBlock
              secondary
              className="content__possition-details"
              as="span"
              children={details}
            />
        }
      </header>
      <TextBlock
        as="p"
        className="content__possition-description"
        children={description}
      />
      <Highlighter stack={tags}>{(({ mutateClass, set, cancel }) => (
        <TextBlock
          secondary
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

