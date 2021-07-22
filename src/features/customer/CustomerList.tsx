import React, { useEffect, useState } from 'react';
import ITableColumn from '../../types/TableColumn';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useCustomers from '../../hooks/useCustomers';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PopupConfirm from './components/PopupConfirm';
import Message from './components/Message';

const CustomerList = () => {
  const { list, getList, remove } = useCustomers();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [openConfirm, setOpenConfirm] = useState(false);
  const [currentCustomerId, setCurrentCustomerId] = useState(0);
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getList();
  }, []);

  const handleShowConfirm = (customerId: number) => {
    setCurrentCustomerId(customerId);
    setOpenConfirm(true);
  };
  const handleCancelConfirm = () => {
    setCurrentCustomerId(0);
    setOpenConfirm(false);
  };
  const handleDelete = async () => {
    await remove(currentCustomerId);
    setOpenConfirm(false);
    setOpenMessage(true);
    setMessage('Deleted successful');
    await getList();
  };

  const handleCloseMessage = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenMessage(false);
  };
  const handleCreate = () => {
    history.push(`${url}/create`);
  };

  const columns: ITableColumn[] = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'address', label: 'Address' },
    { id: 'occupation', label: 'Occupation' },
    { id: 'income', label: 'Income' },
    {
      id: 'action',
      label: 'Action',
      minWidth: 100,
    },
  ];

  return (
    <Box>
      <Grid item xs={12} style={{ maxWidth: '100%' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">Customer List</Typography>
          <Box mb={5}>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleCreate}
            >
              Create
            </Button>
          </Box>
        </Box>
        {list?.length > 0 ? (
          <Table style={{ width: '100%' }}>
            <TableHead>
              <TableRow>
                {columns.map((column: ITableColumn) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((customer: any) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                  <TableCell>{customer.occupation}</TableCell>
                  <TableCell>{customer.income}</TableCell>
                  <TableCell>
                    <Link to={`${url}/${customer.id}`}>
                      <IconButton
                        color="primary"
                        size="small"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton
                      color="primary"
                      size="small"
                      aria-label="edit"
                      onClick={() => handleShowConfirm(customer.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="h6" align="center">
            No customers found
          </Typography>
        )}
      </Grid>
      <PopupConfirm
        open={openConfirm}
        handleSubmit={handleDelete}
        handleCancel={handleCancelConfirm}
      />
      <Message
        open={openMessage}
        message={message}
        handleClose={handleCloseMessage}
      />
    </Box>
  );
};

export default React.memo(CustomerList);
