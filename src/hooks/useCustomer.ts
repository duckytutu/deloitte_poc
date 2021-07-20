import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  getCustomerDetail,
  getCustomerList,
} from '../store/slices/customerSlice';

const useCustomers = (id?: number) => {
  const [loading, setLoading] = useState(false);
  const { list, current } = useAppSelector((state: any) => state.customer);
  const dispatch = useAppDispatch();

  const getList = async () => {
    setLoading(true);
    try {
      await dispatch(getCustomerList());
    } finally {
      setLoading(false);
    }
  };
  const getDetail = () => {
    if (!id) return;
    setLoading(true);
    try {
      dispatch(getCustomerDetail(id));
    } finally {
      setLoading(false);
    }
  };
  const deleteCustomer: any = (customerId?: number) => {
    if (customerId || id) {
      setLoading(true);
      try {
        dispatch(deleteCustomer(customerId || id));
      } finally {
        setLoading(false);
      }
    }
  };

  return { list, current, loading, getList, getDetail, deleteCustomer };
};

export default useCustomers;
