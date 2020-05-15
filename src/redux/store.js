import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import { rootReducer } from './root-reducer';

let middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger]
}

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;