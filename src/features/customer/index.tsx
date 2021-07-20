import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, Switch } from 'react-router';
import CustomerDetail from './CustomerDetail';
import CustomerList from './CustomerList';

const LIST_PATH = '/';
const DETAIL_PATH = '/:id';

const CustomerPage = () => (
  <>
    <Typography variant="h3">Customer Management</Typography>
    <Switch>
      <Route exact path={LIST_PATH} component={CustomerList} />
      <Route exact path={DETAIL_PATH} component={CustomerDetail} />
    </Switch>
  </>
);

export default React.memo(CustomerPage);
