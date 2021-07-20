import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import '../App.css';
import Home from '../features/home/Home';
import Customer from '../features/customer';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/customers">
          <Customer />
        </Route>
        <Redirect to="/auth/404" />
      </Switch>
    </Router>
  );
};

export default Routes;
