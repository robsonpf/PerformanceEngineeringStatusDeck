import { applyMiddleware, createStore, } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
};
