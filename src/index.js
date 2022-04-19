import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {Provider} from 'react-redux';
import savedReck_rdx from './store.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={savedReck_rdx}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);