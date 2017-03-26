// @flow

import React from 'react';

import Highlighter from '../highlighter/highlighter-container';
import Analytics from '../misc/analytics-component';
import { EntityTag } from './styled/entity';

type PropTypes = {
  tags: Array<string>;
};

const Hashtag = Analytics(EntityTag, 'Hashtag');

export default function TaglineComponent({ tags }: PropTypes) {
  return (
    <Highlighter stack={tags}>
      {
        (({ getClassName, set, cancel }) => (
          <div
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
