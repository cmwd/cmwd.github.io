// @flow

import React from 'react';

import { Header, TextBlock } from '../ui';
import Highlighter from '../highlighter/highlighter-container';
import Analytics from '../misc/analytics-component';

type PropTypes = {
  tags: Array<string>;
};

const Hashtag = Analytics((props) => (
  <span {...props} />
), 'Hashtag');

export default function TaglineComponent({ tags }: PropTypes) {
  return (
    <Highlighter stack={tags}>
      {
        (({ getClassName, set, cancel }) => (
          <TextBlock
            secondary
            plain
            as="div"
            className="content__position-tagline"
            onMouseLeave={cancel}
            children={
              tags.map(tag => (
                <Hashtag
                  gaLabel={tag}
                  className={getClassName(
                    tag,
                    'content__position-tag',
                    'content__position-tag--highlight')}
                  onMouseEnter={set(tag)}
                  children={tag.toLowerCase()}
                  data-tag={tag}
                  key={tag}
                />))
              }
            />
        ))
      }
    </Highlighter>
  );
}
