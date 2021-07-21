import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Route, useLocation, Link as RouterLink } from 'react-router-dom';

const AppBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <Route>
      <Breadcrumbs aria-label="Breadcrumb">
        <RouterLink color="inherit" to="/">
          Home
        </RouterLink>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography color="textPrimary" key={to}>
              {value}
            </Typography>
          ) : (
            <RouterLink color="inherit" to={to} key={to}>
              {value}
            </RouterLink>
          );
        })}
      </Breadcrumbs>
    </Route>
  );
};

export default React.memo(AppBreadcrumbs);
