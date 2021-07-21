import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { ICustomer } from '../features/customer/types/Customer';
import {
  createCustomer,
  deleteCustomer,
  editCustomer,
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
  const getDetail = async () => {
    if (!id) return;
    setLoading(true);
    try {
      dispatch(getCustomerDetail(id));
    } finally {
      setLoading(false);
    }
  };

  const create = async (customer: ICustomer) => {
    setLoading(true);
    try {
      dispatch(createCustomer(customer));
    } finally {
      setLoading(false);
    }
  };

  const edit = async (customer: ICustomer) => {
    setLoading(true);
    try {
      dispatch(editCustomer(customer));
    } finally {
      setLoading(false);
    }
  };

  const remove: any = async (customerId?: number) => {
    const _customerId = customerId || id;
    if (!_customerId) return;
    setLoading(true);
    try {
      dispatch(deleteCustomer(_customerId));
    } finally {
      setLoading(false);
    }
  };

  return {
    list,
    current,
    loading,
    getList,
    getDetail,
    create,
    remove,
    edit,
  };
};

export default useCustomers;
