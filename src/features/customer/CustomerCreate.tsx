import React from 'react';
import Typography from '@material-ui/core/Typography';
import CustomerForm from '../components/CustomerForm';
import useCustomers from '../../hooks/useCustomers';
import { ICustomer } from './types/Customer';
import { useHistory } from 'react-router';

const CustomerCreate = () => {
  const { create } = useCustomers();
  const history = useHistory();

  const handleSubmit = async (customer: ICustomer) => {
    await create(customer);
    history.push('/customers');
  };

  return (
    <>
      <Typography variant="subtitle1">Create customer</Typography>
      <CustomerForm onSubmit={handleSubmit} />
    </>
  );
};

export default CustomerCreate;
