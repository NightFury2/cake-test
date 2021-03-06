import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    NotFound,
    Alle,
    City,
    Cake
  } from 'containers/index';

export default () => {
  /**
    const requriLogin = (nextState, replace, cb) => {
      function checkAuth() {
        const {auth: {auth}} = store.getState();
        if (!user) {
          replace('/');
        }
        cb();
      }
      if (!isAuthLoaded(store.getState())) {
        store.dispatch(loadAuth()).then(checkAuth);
      } else {
        checkAuth();
      }
    };
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
      { /* Catch all route */ }
      <Route path="Alle" component={Alle}>
        <Route path=":city" component={City}/>
        <Route path="cake/:cakeName" component={Cake}/>
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
