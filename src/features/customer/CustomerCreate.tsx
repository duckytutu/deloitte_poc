import Typography from '@material-ui/core/Typography';
import React from 'react';
import CustomerForm from '../components/CustomerForm';

const CustomerCreate = () => {
  return (
    <>
      <Typography variant="subtitle1">Create customer</Typography>
      <CustomerForm />
    </>
  );
};

export default React.memo(CustomerCreate);
