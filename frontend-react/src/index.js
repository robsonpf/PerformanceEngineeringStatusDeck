import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import store from './redux/store';
import { fetchSlides, } from './redux/actions/slide'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const storeInstance = store();
storeInstance.dispatch(fetchSlides())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
