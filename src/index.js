import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

fetch(`${process.env.PUBLIC_URL}/data.json`)
  .then(response => response.json())
  .then(init);


function init(props) {
  ReactDOM.render(
    <App {...props} />,
    document.getElementById('root')
  );
}
