import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerDetail from './CustomerDetail';
import CustomerCreate from './CustomerCreate';
import CustomerEdit from './CustomerEdit';

const CustomerPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Typography variant="h3">Customer Management</Typography>
      <Switch>
        <Route exact path={path} component={CustomerList} />
        <Route exact path={`${path}/create`} component={CustomerCreate} />
        <Route exact path={`${path}/:id/edit`} component={CustomerEdit} />
        <Route exact path={`${path}/:id`} component={CustomerDetail} />
      </Switch>
    </>
  );
};

export default React.memo(CustomerPage);
