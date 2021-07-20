import httpClient from '.';
import { ICustomer } from '../features/customer/types/Customer';

const API_PATH = 'customers';

export const getAllCustomer = () => httpClient.get(API_PATH);

export const getCustomerById = (id: number) =>
  httpClient.get(`${API_PATH}/${id}`);

export const createCustomer = (data: ICustomer) =>
  httpClient.post(API_PATH, data);

export const editCustomer = (data: ICustomer) => httpClient.put(API_PATH, data);

export const deleteCustomerById = (id: number) =>
  httpClient.delete(`${API_PATH}/${id}`);
