import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  deleteCustomerById,
  getAllCustomer,
  getCustomerById,
} from '../../apis/customerApis';
import { ICustomer } from '../../features/customer/types/Customer';

export interface CustomerState {
  list: ICustomer[];
  current: ICustomer | null;
}

const initialState: CustomerState = {
  list: [],
  current: null,
};

export const getCustomerList = createAsyncThunk(
  'customer/getCustomerList',
  async () => {
    const { data }: any = await getAllCustomer();
    return data;
  }
);

export const getCustomerDetail = createAsyncThunk(
  'customer/getCustomerDetail',
  async (id: number) => {
    const { data }: any = await getCustomerById(id);
    return data;
  }
);

export const deleteCustomer = createAsyncThunk(
  'customer/deleteCustomer',
  async (id: number) => {
    await deleteCustomerById(id);
  }
);

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
    },
    setCurrent: (state, { payload }) => {
      state.current = payload;
    },
  },
  extraReducers: {
    [getCustomerList.fulfilled as any]: (state, { payload }) => {
      state.list = payload;
    },
    [getCustomerDetail.fulfilled as any]: (state, { payload }) => {
      state.current = payload;
    },
  },
});

export const { setList, setCurrent } = customerSlice.actions;

export default customerSlice.reducer;
