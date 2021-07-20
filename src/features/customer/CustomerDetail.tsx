import React from 'react';
import { useParams } from 'react-router-dom';
import useCustomers from '../../hooks/useCustomer';
import Box from '@material-ui/core/Box';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';

const CustomerDetail = () => {
  const { id }: any = useParams();
  const { current: data, getDetail, deleteCustomer } = useCustomers(id);

  const handleDelete = () => {
    deleteCustomer(id);
  };

  useEffect(() => {
    getDetail(Number(id));
  }, []);

  return (
    <Box mt={5}>
      {data ? (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>{data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>{data.address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Occupation</TableCell>
              <TableCell>{data.occupation}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Income</TableCell>
              <TableCell>{data.income}</TableCell>
            </TableRow>
          </TableBody>
          <Button onClick={() => handleDelete}>Delete</Button>
        </Table>
      ) : (
        'Invalid customer'
      )}
    </Box>
  );
};

export default React.memo(CustomerDetail);
