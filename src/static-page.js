import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App';

module.exports = renderToString(<App />);

