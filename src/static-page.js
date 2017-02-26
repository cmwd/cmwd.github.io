import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App';

export default function render(locals) {
  const { initialState } = locals;

  return renderToString(<App {...initialState} />);
};

