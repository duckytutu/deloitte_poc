import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { ICustomer } from '../customer/types/Customer';
import * as Yup from 'yup';

const CustomerForm = ({
  customer,
  onSubmit,
}: {
  customer?: ICustomer;
  onSubmit: (data: ICustomer) => void | Promise<void>;
}) => {
  const initialValues = customer
    ? { ...customer }
    : { name: '', address: '', occupation: '', income: 0 };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      address: Yup.string().required('Address is required'),
      occupation: Yup.string().required('Occupation is required'),
      income: Yup.number().required('Income is required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        {customer && (
          <Box mt={4}>
            <TextField
              name="id"
              label="Name"
              variant="outlined"
              value={formik.values.id}
              onChange={formik.handleChange}
              disabled
            />
          </Box>
        )}
        <Box mt={4}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
          />
        </Box>
        <Box mt={4}>
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            value={formik.values.address}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            onChange={formik.handleChange}
          />
        </Box>
        <Box mt={4}>
          <TextField
            name="occupation"
            label="Occupation"
            variant="outlined"
            value={formik.values.occupation}
            error={
              formik.touched.occupation && Boolean(formik.errors.occupation)
            }
            helperText={formik.touched.occupation && formik.errors.occupation}
            onChange={formik.handleChange}
          />
        </Box>
        <Box mt={4}>
          <TextField
            name="income"
            type="number"
            label="Income"
            variant="outlined"
            value={formik.values.income}
            error={formik.touched.income && Boolean(formik.errors.income)}
            helperText={formik.touched.income && formik.errors.income}
            onChange={formik.handleChange}
          />
        </Box>
        <Box mt={4}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default React.memo(CustomerForm);
