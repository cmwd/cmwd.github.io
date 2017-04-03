import React from 'react';
import { renderToString } from 'react-dom/server';
import { styleSheet } from 'styled-components';

import App from './App';
import { normalizer } from './entity';

export default function render(locals) {
  const store = normalizer(locals.initialState);
  const html = renderToString(
    <App
      sidebar={store.sidebar}
      sections={store.sections}
    />);
  const css = styleSheet.getCSS();

  return {
    '/static.html': html,
    '/static.css': css,
  };
};
 
