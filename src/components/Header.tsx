import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleOnClick = useCallback(() => {
    push("/add-users");
  }, [push]);

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
          Create User
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
