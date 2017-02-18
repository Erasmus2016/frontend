/**
 * Create the store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import getSagas from './sagas';
import createSocketMiddleware from './utils/socketMiddleware';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(createSocket) {
  return (initialState = {}, history) => {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
      sagaMiddleware,
      createSocketMiddleware(createSocket),
      routerMiddleware(history),
    ];

    const enhancers = [
      applyMiddleware(...middlewares),
    ];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
      process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    /* eslint-enable */

    const store = createStore(
      createReducer(),
      fromJS(initialState),
      composeEnhancers(...enhancers)
    );

    // Run sagas
    let runningSagas = getSagas().map(sagaMiddleware.run);

    // Make reducers and sagas hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        System.import('./reducers').then((reducerModule) => {
          const createReducers = reducerModule.default;
          const nextReducers = createReducers();

          store.replaceReducer(nextReducers);
        });
      });

      module.hot.accept('./sagas', () => {
        System.import('./sagas').then((sagasModule) => {
          const getSagasHot = sagasModule.default;
          runningSagas.forEach((saga) => saga.cancel());
          runningSagas = getSagasHot().map(sagaMiddleware.run);
        });
      });
    }

    return store;
  };
}
