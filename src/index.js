import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Containers/App';
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
