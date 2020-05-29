import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  buttonText: string;
  handleOnClick: () => void;
}

export const Header = ({ buttonText, handleOnClick }: Props) => {
  const classes = useStyles();
  const { push } = useHistory();

  // const handleOnClick = useCallback(() => {
  //   push("/admin-users");
  // }, [push]);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Mexican Test
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleOnClick}
        >
          {buttonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);
