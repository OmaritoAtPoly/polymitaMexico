
import React from 'react';
import Button, { ButtonType } from './Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  title: string
  name: string
  email: string
  lastName: string
  label: string;
  typeVariant: ButtonType;
  fullWidth: boolean
}


const ModalDialog = ({ name, email, lastName, title, label, typeVariant, fullWidth }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button label={label} typeVariant="primary" fullWidth={false} color="primary" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Email:{email} <br />
              Name:{name}   <br />
              Last Name:{lastName}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalDialog