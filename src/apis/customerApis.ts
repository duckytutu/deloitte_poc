import httpClient from '.';
import { ICustomer } from '../features/customer/types/Customer';

const API_PATH = 'customer/';

export const getAllCustomer = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        name: 'SmartOSC',
        address: 'Hanoi',
        occupation: 'Dev',
        income: 100000,
      },
    ]);
  });
  // httpClient.get(API_PATH)
};

export const getCustomerById = (id: number) =>
  httpClient.get(`${API_PATH}${id}`);

export const createCustomer = (data: ICustomer) =>
  httpClient.post(API_PATH, data);

export const editCustomer = (data: ICustomer) => httpClient.put(API_PATH, data);

export const deleteCustomer = (id: number) =>
  httpClient.delete(`${API_PATH}${id}`);
