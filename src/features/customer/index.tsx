import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerDetail from './CustomerDetail';

const CustomerPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Typography variant="h3">Customer Management</Typography>
      <Switch>
        {/* <Route exact path={path} component={CustomerList} /> */}
        <Route path={`${path}/:id`} component={CustomerDetail} />
      </Switch>
    </>
  );
};

export default React.memo(CustomerPage);
