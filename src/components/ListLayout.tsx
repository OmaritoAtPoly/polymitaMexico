import List from "@material-ui/core/List";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { PropsWithChildren } from "react";

const ListLayout = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List aria-label="main">{children}</List>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default ListLayout;
