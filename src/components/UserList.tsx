import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ListLayout from "./ListLayout";
import User from "./User";

interface Props {
  users: any[];
  onUserDelete: (userId: number) => void;
}

export const UsersList = ({ users, onUserDelete }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h4"
        color="primary"
        component="h4"
        className={classes.title}
      >
        User List
      </Typography>
      <ListLayout>
        {users.map((user: any) => (
          <User
            id={user.id}
            onDelete={() => onUserDelete(user.id)}
            title={user.name}
            subTitle={user.job}
            variant={"tiny"}
          />
        ))}
      </ListLayout>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    width: "40%",
    height: "20rem",
    marginTop: "2rem",
  },
  list: {
    border: "1px solid #ccc",
    height: "inherit",
    padding: ".5rem",
    marginTop: "1rem",
  },
  title: {
    marginLeft: "1rem",
    marginBottom: "1rem",
  }
});
