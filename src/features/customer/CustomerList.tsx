import React, { useEffect } from 'react';
import ITableColumn from '../../types/TableColumn';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useCustomers from '../../hooks/useCustomer';
import { Link, useRouteMatch } from 'react-router-dom';

const CustomerList = () => {
  const {
    list: { data },
    getList,
    deleteCustomer,
  } = useCustomers();
  const { url } = useRouteMatch();

  useEffect(() => {
    getList();
  }, []);

  const handleDelete = (id: number) => {
    deleteCustomer(id);
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
    <Box mt={5} width="100%">
      {data?.length > 0 ? (
        <Grid item xs={12} style={{ maxWidth: '100%' }}>
          <Link to={`${url}/create`}>Create</Link>
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
              {data.map((customer: any) => (
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
                    <IconButton color="primary" size="small" aria-label="edit">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      ) : (
        <Typography variant="h6" align="center">
          No customers found
        </Typography>
      )}
    </Box>
  );
};

export default React.memo(CustomerList);
