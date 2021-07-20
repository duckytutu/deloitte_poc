import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import { ICustomer } from '../customer/types/Customer';

const CustomerForm = ({ customer }: { customer?: ICustomer }) => {
  const initialValues = customer
    ? { ...customer }
    : { name: '', address: '', occupation: '', income: 0 };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Typography variant="h1">Customer Form</Typography>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        {customer && (
          <Box>
            <TextField
              name="id"
              label="Name"
              variant="outlined"
              value={formik.values.id}
              onChange={formik.handleChange}
            />
          </Box>
        )}
        <Box>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="occupation"
            label="Occupation"
            variant="outlined"
            value={formik.values.occupation}
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="income"
            type="number"
            label="Income"
            variant="outlined"
            value={formik.values.income}
            onChange={formik.handleChange}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
        <Button variant="outlined" color="default" type="reset">
          Reset
        </Button>
      </form>
    </>
  );
};

export default React.memo(CustomerForm);
