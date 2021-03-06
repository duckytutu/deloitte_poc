import httpClient from '.';
import { ICustomer } from '../features/customer/types/Customer';

const API_PATH = 'customer';

export const getAll = () => httpClient.get(API_PATH);

export const getById = (id: number) => httpClient.get(`${API_PATH}/${id}`);

export const create = (data: ICustomer) => httpClient.post(API_PATH, data);

export const edit = ({ id, ...data }: ICustomer) =>
  httpClient.put(`${API_PATH}/${id}`, data);

export const remove = (id: number) => httpClient.delete(`${API_PATH}/${id}`);
