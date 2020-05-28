import { Theme } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Suspense from "../components/Suspense";
import UsersContainer from "../containers/UsersContainer";

const Users = () => {
  const classes = useStyles();
  const { location, replace } = useHistory();

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      replace(
        `${location.pathname}?page=${value}&per_page=${
          process.env.REACT_APP_PER_PAGE
        }`
      );
    },
    [location.pathname, replace]
  );

  return (
    <Suspense>
      <UsersContainer />
      <div className={classes.root}>
        <Pagination
          count={3}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </Suspense>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default Users;
