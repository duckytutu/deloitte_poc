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
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  const getDetail = async () => {
    if (!id) return;
    setLoading(true);
    try {
      await dispatch(getCustomerDetail(id));
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  const create = async (customer: ICustomer) => {
    setLoading(true);
    try {
      await dispatch(createCustomer(customer));
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  const edit = async (customer: ICustomer) => {
    setLoading(true);
    try {
      await dispatch(editCustomer(customer));
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  const remove: any = async (customerId?: number) => {
    const _customerId = customerId || id;
    if (!_customerId) return;
    setLoading(true);
    try {
      await dispatch(deleteCustomer(_customerId));
      Promise.resolve();
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
