import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { ActionTypes as SocketActions } from './utils/socketMiddleware';

import App from 'containers/App';
import LandingPage from 'containers/LandingPage';
import NotFound from 'containers/NotFoundPage';
import GameScreen from 'containers/GameScreen';

const createOnEnterPlay = (store) =>
  store.dispatch({ type: SocketActions.SOCKET_START });

export default function createRoutes(store) { // eslint-disable-line no-unused-vars
  return (
    <Route path="/" component={App} >
      <IndexRoute component={LandingPage} />
      <Route path="play" component={GameScreen} onEnter={createOnEnterPlay(store)} />
      <Route path="*" component={NotFound} />
    </Route>
  );
}
