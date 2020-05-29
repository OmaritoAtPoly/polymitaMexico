import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { AddUserForm, UserInput } from "./AddUserForm";
import { UsersList } from "./UserList";

interface Props {
  users: any[];
  handleUserDelete: (userId: number) => void;
  handleSubmit: (userInput: UserInput) => void;
  loading: boolean;
}

export const AdminUser = ({
  handleSubmit,
  handleUserDelete,
  loading,
  users,
}: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.row}>
      <UsersList users={users} onUserDelete={handleUserDelete} />
      <AddUserForm loading={loading} handleSubmit={handleSubmit} />
    </Container>
  );
};

const useStyles = makeStyles({
  row: {
    display: "flex",
    justifyContent: "center",
  },
});
