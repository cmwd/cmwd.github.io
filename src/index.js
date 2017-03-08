import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function render(state) {
  ReactDOM.render(
    <App {...state} />,
    document.getElementById('root')
  );
}

fetch(`${process.env.PUBLIC_URL}/data.json`)
  .then(response => response.json())
  .then(render);

