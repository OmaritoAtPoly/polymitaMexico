
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  title: string
  name: string
  email: string
  lastName: string
  label:string
 
}


const ModalDialog = ({ name, email, lastName, title,label  }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} >{label}</Button>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent style={{minWidth:360}} >
          <DialogContentText  className={classes.content} id="alert-dialog-description">
            <text>Email:{email}</text>
            <text>Name:{name}</text>
           <text> Last Name:{lastName}</text>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "10%",
      backgroundColor: theme.palette.background.paper,
    }, 
    content:{
      display:"flex",
     flexDirection:"column"
    }
  })
);

export default ModalDialog