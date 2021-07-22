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
import AppBreadcrumbs from '../components/AppBreadcrumbs';
import Box from '@material-ui/core/Box';
import BackButton from '../components/BackButton';

const Routes = () => {
  return (
    <Router>
      <Box mt={5} width="50%" ml="auto" mr="auto">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <AppBreadcrumbs />
          <BackButton />
        </Box>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/customers">
            <Customer />
          </Route>
          <Redirect to="/auth/404" />
        </Switch>
      </Box>
    </Router>
  );
};

export default Routes;
