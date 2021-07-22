import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CustomerForm from '../components/CustomerForm';
import useCustomers from '../../hooks/useCustomers';
import { ICustomer } from './types/Customer';
import { useHistory } from 'react-router';
import Box from '@material-ui/core/Box';
import Message from './components/Message';

const CustomerCreate = () => {
  const { create } = useCustomers();
  const history = useHistory();
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleCloseMessage = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenMessage(false);
    history.push('/customers');
  };

  const handleSubmit = async (customer: ICustomer) => {
    await create(customer);
    setOpenMessage(true);
    setMessage('Create successful');
  };

  return (
    <Box mt={5} width="50%" ml="auto" mr="auto">
      <Typography variant="subtitle1">Create customer</Typography>
      <CustomerForm onSubmit={handleSubmit} />
      <Message
        open={openMessage}
        message={message}
        handleClose={handleCloseMessage}
        autoHide={1000}
        horizontal={'center'}
      />
    </Box>
  );
};

export default React.memo(CustomerCreate);
