import httpClient from '.';
import { ICustomer } from '../features/customer/types/Customer';

const API_PATH = 'customer/';

const mockData = [
  {
    id: 1,
    name: 'SmartOSC',
    address: 'Hanoi',
    occupation: 'Dev',
    income: 100000,
  },
  {
    id: 2,
    name: 'Tung Nguyen',
    address: 'Hanoi',
    occupation: 'Dev',
    income: 10000,
  },
  {
    id: 3,
    name: 'SmartOSC Tung',
    address: 'HCMC',
    occupation: 'Dev',
    income: 1000000,
  },
  {
    id: 4,
    name: 'Tung Do',
    address: 'Hanoi',
    occupation: 'Dev',
    income: 30000,
  },
];

export const getAllCustomer = () => {
  return new Promise((resolve, reject) => {
    resolve(mockData);
  });
  // return httpClient.get(API_PATH);
};

export const getCustomerById = (id: number) => {
  return new Promise((resolve, reject) => {
    resolve(mockData.find((customer) => customer.id === id));
  });
  // httpClient.get(`${API_PATH}${id}`);
};

export const createCustomer = (data: ICustomer) =>
  httpClient.post(API_PATH, data);

export const editCustomer = (data: ICustomer) => httpClient.put(API_PATH, data);

export const deleteCustomer = (id: number) =>
  httpClient.delete(`${API_PATH}${id}`);
