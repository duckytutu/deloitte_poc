import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import useCustomers from '../../hooks/useCustomers';
import CustomerForm from './components/CustomerForm';
import { ICustomer } from './types/Customer';
import Box from '@material-ui/core/Box';
import Message from './components/Message';

const CustomerEdit = () => {
  const { id }: any = useParams();
  const history = useHistory();
  const { current, getDetail, edit } = useCustomers(id);

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
    await edit(customer);
    setOpenMessage(true);
    setMessage('Edit successful');
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Box mt={5} width="50%" ml="auto" mr="auto">
      <Typography variant="subtitle1">Edit customer</Typography>
      <CustomerForm customer={current} onSubmit={handleSubmit} />
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

export default React.memo(CustomerEdit);
