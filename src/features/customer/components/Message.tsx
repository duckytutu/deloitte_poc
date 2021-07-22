import React, { memo } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const DEFAULT_PROPS = {
  vertical: 'top',
  horizontal: 'right',
  message: '',
  autoHide: 2000,
};

interface IMessage {
  handleClose?: any;
  open: boolean;
  vertical?: any;
  horizontal?: any;
  message: string;
  autoHide?: number;
}

const Message = (props: IMessage) => {
  const {
    handleClose,
    open,
    vertical = DEFAULT_PROPS.vertical,
    horizontal = DEFAULT_PROPS.horizontal,
    message = DEFAULT_PROPS.message,
    autoHide = DEFAULT_PROPS.autoHide,
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
};

export default memo(Message);
