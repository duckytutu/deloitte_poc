import React from 'react';
import Typography from '@material-ui/core/Typography';
import CustomerForm from '../components/CustomerForm';
import useCustomers from '../../hooks/useCustomers';
import { ICustomer } from './types/Customer';
import { useHistory } from 'react-router';
import Box from '@material-ui/core/Box';

const CustomerCreate = () => {
  const { create } = useCustomers();
  const history = useHistory();

  const handleSubmit = async (customer: ICustomer) => {
    await create(customer);
    history.push('/customers');
  };

  return (
    <Box mt={5} width="50%" ml="auto" mr="auto">
      <Typography variant="subtitle1">Create customer</Typography>
      <CustomerForm onSubmit={handleSubmit} />
    </Box>
  );
};

export default CustomerCreate;
