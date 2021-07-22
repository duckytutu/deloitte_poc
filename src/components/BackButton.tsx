import Button from '@material-ui/core/Button';
import React from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const handleBack = () => {
    history.goBack();
  };

  if (pathname === '/') return null;

  return (
    <Button
      type="button"
      variant="contained"
      color="secondary"
      onClick={handleBack}
    >
      Back
    </Button>
  );
};

export default React.memo(BackButton);
