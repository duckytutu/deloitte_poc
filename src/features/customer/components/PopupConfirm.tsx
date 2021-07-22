import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
const defaultProps = {
  defaultTextTitle: 'Are you sure ?',
  defaultTextContent: 'Do you want delete',
  defaultTextOk: 'OK',
  defaultTextCancel: 'Cancel',
};
const {
  defaultTextTitle,
  defaultTextContent,
  defaultTextOk,
  defaultTextCancel,
} = defaultProps;

function PopupConfirm(props: any) {
  const {
    handleCancel,
    handleSubmit,
    open,
    textTitle = defaultTextTitle,
    textContent = defaultTextContent,
    btnTextCancel = defaultTextCancel,
    btnTextOk = defaultTextOk,
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
}

export default PopupConfirm;
