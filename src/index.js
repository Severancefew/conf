import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Presentation />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextApp = require('./presentation').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}

registerServiceWorker();
