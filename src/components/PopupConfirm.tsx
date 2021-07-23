import React, { memo } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const DEFAULT_PROPS = {
  textTitle: 'Are you sure ?',
  textContent: 'Are you sure you want to delete',
  textOk: 'OK',
  textCancel: 'Cancel',
};

interface IPopupConfirm {
  handleCancel?: any;
  handleSubmit?: any;
  open: boolean;
  textTitle?: string;
  textContent?: string;
  btnTextCancel?: string;
  btnTextOk?: string;
}

const PopupConfirm = (props: IPopupConfirm) => {
  const {
    handleCancel,
    handleSubmit,
    open,
    textTitle = DEFAULT_PROPS.textTitle,
    textContent = DEFAULT_PROPS.textContent,
    btnTextCancel = DEFAULT_PROPS.textCancel,
    btnTextOk = DEFAULT_PROPS.textOk,
  } = props;
  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="sm"
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{textTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {textContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          {btnTextCancel}
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          {btnTextOk}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(PopupConfirm);
