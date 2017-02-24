import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App';
import state from '../public/data.json';

export default function render(locals) {
  return renderToString(<App {...state} />);
};

