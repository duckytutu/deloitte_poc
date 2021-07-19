import React from 'react';

import { CircularProgress } from '@material-ui/core';

function Loader() {
  return (
    <div>
      <CircularProgress color="secondary" />
    </div>
  );
}

export default Loader;
