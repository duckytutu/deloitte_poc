import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import '../App.css';
import PublicRoute from './PublicRoute';
import IRoute from './Route';
import routes from './routeList';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: IRoute) => (
          <PublicRoute
            key={route.path}
            component={route.component}
            layout={route.layout}
            path={route.path}
            exact
          />
        ))}
        <Redirect to="/auth/404" />
      </Switch>
    </Router>
  );
};

export default Routes;
