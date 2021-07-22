import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const defaultProps = {
  defaultVertical: 'top',
  defaultHorizontal: 'right',
  defaultMessage: 'success',
  defaultAutoHide: 2000,
};
const { defaultVertical, defaultHorizontal, defaultMessage, defaultAutoHide } =
  defaultProps;

function Message(props: any) {
  const {
    handleClose,
    open,
    vertical = defaultVertical,
    horizontal = defaultHorizontal,
    message = defaultMessage,
    autoHide = defaultAutoHide,
  } = props;
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message={message}
      autoHideDuration={autoHide}
      key={vertical + horizontal}
    >
      <Alert onClose={handleClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Message;
