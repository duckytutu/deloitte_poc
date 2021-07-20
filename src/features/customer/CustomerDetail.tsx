import Box from '@material-ui/core/Box';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const data = { id: '123', name: 'Customer 1', email: 'customer1@email.com' };

const CustomerDetail = () => {
  return (
    <Box mt={5}>
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
          <TableCell>Email</TableCell>
          <TableCell>{data.email}</TableCell>
        </TableRow>
      </TableBody>
    </Box>
  );
};

export default React.memo(CustomerDetail);
