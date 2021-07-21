import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useCustomers from '../../hooks/useCustomers';
import Box from '@material-ui/core/Box';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CustomerDetail = () => {
  const { id }: any = useParams();
  const history = useHistory();
  const { current: data, getDetail, remove } = useCustomers(id);

  const handleDelete = async () => {
    await remove(id);
    history.push('/customers');
  };

  const handleEdit = async () => {
    history.push(`/customers/${id}/edit`);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Box mt={5} width="50%" ml="auto" mr="auto">
      {data ? (
        <>
          <Typography variant="subtitle1">Customer Detail</Typography>
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
          </Table>
          <Box mt={4}>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </>
      ) : (
        'Customer not found'
      )}
    </Box>
  );
};

export default CustomerDetail;
