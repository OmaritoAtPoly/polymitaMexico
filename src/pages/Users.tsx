import { Theme } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Suspense from "../components/Suspense";
import UsersContainer from "../containers/UsersContainer";
import { Header } from "../components/Header";

const Users = () => {
  const classes = useStyles();
  const { location, replace } = useHistory();

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      replace(
        `${location.pathname}?page=${value}&per_page=${process.env.REACT_APP_PER_PAGE || 4}`
      );
    },
    [location.pathname, replace]
  );
  const { push } = useHistory();

  return (
    <>
      <Header />
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
    </>
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
