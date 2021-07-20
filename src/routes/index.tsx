import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import '../App.css';
import IRoute from './Route';
import routes from './routeList';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: IRoute) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.exact || true}
          />
        ))}
        {/* <Redirect to="/auth/404" /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
