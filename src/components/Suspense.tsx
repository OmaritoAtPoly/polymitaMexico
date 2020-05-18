import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { PropsWithChildren, Suspense as SuspenseReact } from "react";

const Suspense = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <SuspenseReact
      fallback={
        <div className={classes.container}>
          <CircularProgress />
        </div>
      }
    >
      {children}
    </SuspenseReact>
  );
};

export default Suspense;

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 30,
  },
}));
