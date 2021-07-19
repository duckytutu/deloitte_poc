import IRoute from '../models/Route';
import async from '../components/Async';

const Page404 = async(() => import('../pages/auth/Page404'));
const HomePage = async(() => import('../pages/counter/Counter'));

const routes: IRoute[] = [
  {
    id: 'Page404',
    path: '/auth/404',
    component: Page404,
    children: null,
  },
  {
    id: 'HomePage',
    path: '/',
    component: HomePage,
    children: null,
  },
];

export default routes;
