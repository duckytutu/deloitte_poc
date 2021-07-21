import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import useCustomers from '../../hooks/useCustomers';
import CustomerForm from '../components/CustomerForm';
import { ICustomer } from './types/Customer';
import Box from '@material-ui/core/Box';

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
    <Box mt={5} width="50%" ml="auto" mr="auto">
      <Typography variant="subtitle1">Edit customer</Typography>
      <CustomerForm customer={current} onSubmit={handleSubmit} />
    </Box>
  );
};

export default React.memo(CustomerEdit);
