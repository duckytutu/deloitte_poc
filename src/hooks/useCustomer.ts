import React from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getCustomerList } from '../store/slices/customerSlice';

const useCustomers = () => {
  const { list, current } = useAppSelector((state: any) => state.customer);
  const dispatch = useAppDispatch();

  const getList = () => dispatch(getCustomerList());

  return { list, current, getList };
};

export default useCustomers;
