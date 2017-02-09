import React from 'react';
import classNames from 'classnames';

import { Header, TextBlock } from '../ui';
import Highlighter from '../highlighter';

export default function Possition(props) {
  const {
    possition,
    company,
    location,
    description,
    start,
    end,
    nerdingOut = ['ES6', 'Node', 'Java']
  } = props;
  const tags = nerdingOut.map(s => s.toLowerCase());

  return (
    <Highlighter
      stack={tags}
      context="tech"
    >{(({ highlight, highlighting, set, cancel }) => (
      <article className={classNames(
        'content__possition',
        {
          'content__possition--highlight': highlight,
          'content__possition--lowpoint': highlighting && !highlight,
        }
      )}>
        <header>
          <Header
            className="content__possition-title"
            as="h3"
            children={`${possition} at ${company}`}
          />
          <TextBlock
            secondary
            className="content__possition-details"
            as="span"
          >{end} - {start} / {location}
          </TextBlock>
        </header>
        <TextBlock as="p" children={description} />
        <TextBlock
          secondary
          as="div"
          className="content__possition-tagline"
          onMouseLeave={cancel}
          children={tags.map(tag => (
            <span
              className="content__possition-tag"
              key={tag}
              data-tag={tag}
              onMouseEnter={(event) => set(event.target.dataset.tag)}
            >{tag}</span>
          ))}
        />
      </article>
    ))}</Highlighter>
  );
}

