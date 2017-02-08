import React from 'react';
import classNames from 'classnames';

import { Header, TextBlock } from '../ui';

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
  const classes = classNames(
    'content__possition',
    tags.map(t => `content__possition--${t}`));

  return (
    <article className={classes}>
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
        children={tags.map(tag => (
          <span
            className="content__possition-tag"
            key={tag}
            data-tag={tag}
            onMouseEnter={(event) => console.log(event.target.dataset.tag)}
          >{tag}</span>
        ))}
      />
    </article>
  );
}

