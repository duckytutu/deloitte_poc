import React from 'react';
import { Typography } from '@material-ui/core';

export default function Page404() {
  return (
    <div style={{ padding: '100px 20px 0 20px' }}>
      <Typography component="h1" variant="h1" align="center" gutterBottom>
        404
      </Typography>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        Page not found.
      </Typography>
      <Typography component="h2" variant="body1" align="center" gutterBottom>
        The page you are looking for might have been removed.
      </Typography>
    </div>
  );
}
