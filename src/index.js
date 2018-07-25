import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';

ReactDOM.render(<Presentation />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextApp = require('./presentation').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}

registerServiceWorker();
