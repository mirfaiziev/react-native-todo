/**
 * Created by Victor on 22/05/2018.
 */
import {createStore, applyMiddleware} from "redux";
import {createLogger} from 'redux-logger';
import rootReducer from "./reducers";
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );


  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}