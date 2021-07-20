import IRoute from './Route';
import async from '../components/Async';
import { AppLayout } from '../layouts';
import Customer from '../features/customer';
import Home from '../features/home/Home';
import CustomerDetail from '../features/customer/CustomerDetail';

const Page404 = async(() => import('../features/auth/Page404'));

const routes: IRoute[] = [
  {
    id: 'Page404',
    path: '/auth/404',
    component: Page404,
    children: null,
  },
  {
    id: 'Home',
    path: '/',
    component: Home,
    children: null,
    exact: true,
  },
  {
    id: 'Customer',
    path: '/customers',
    component: Customer,
    children: null,
    layout: AppLayout,
    exact: false,
  },
];

export default routes;
