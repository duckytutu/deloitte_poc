import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import useCustomers from '../../hooks/useCustomers';
import CustomerForm from '../components/CustomerForm';
import { ICustomer } from './types/Customer';

const CustomerEdit = () => {
  const { id }: any = useParams();
  const history = useHistory();
  const { current, getDetail, edit } = useCustomers(id);

  const handleSubmit = async (customer: ICustomer) => {
    await edit(customer);
    history.push('/customers');
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      <Typography variant="subtitle1">Edit customer</Typography>
      <CustomerForm customer={current} onSubmit={handleSubmit} />
    </>
  );
};

export default CustomerEdit;
