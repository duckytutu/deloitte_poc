import IRoute from './Route';
import async from '../components/Async';
import { AppLayout } from '../layouts';
import Customer from '../features/customer';

const Page404 = async(() => import('../features/auth/Page404'));

const routes: IRoute[] = [
  {
    id: 'Page404',
    path: '/auth/404',
    component: Page404,
    children: null,
  },
  {
    id: 'Customer',
    path: '/',
    component: Customer,
    children: null,
    layout: AppLayout,
  },
];

export default routes;
