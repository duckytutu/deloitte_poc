import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { remove, getAll, edit, getById, create } from '../../apis/customerApis';
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
  'customer/getList',
  async () => {
    const { data }: any = await getAll();
    return data;
  }
);

export const getCustomerDetail = createAsyncThunk(
  'customer/getDetail',
  async (id: number) => {
    const { data }: any = await getById(id);
    return data;
  }
);

export const createCustomer = createAsyncThunk(
  'customer/create',
  async (customer: ICustomer) => {
    await create(customer);
  }
);

export const editCustomer = createAsyncThunk(
  'customer/edit',
  async (customer: ICustomer) => {
    await edit(customer);
  }
);

export const deleteCustomer = createAsyncThunk(
  'customer/delete',
  async (id: number) => {
    await remove(id);
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
