import React from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  getCustomerDetail,
  getCustomerList,
} from '../store/slices/customerSlice';

const useCustomers = (id?: number) => {
  const { list, current } = useAppSelector((state: any) => state.customer);
  const dispatch = useAppDispatch();

  const getList = () => dispatch(getCustomerList());

  const getDetail = (id: number) => dispatch(getCustomerDetail(id));

  return { list, current, getList, getDetail };
};

export default useCustomers;
