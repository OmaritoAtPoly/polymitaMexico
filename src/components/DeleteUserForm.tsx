import { Button } from "@material-ui/core";
import React from "react";

interface Props {
  onSubmit: (selectedUsers: any) => Promise<void>;
}
const DeleteUserForm = ({ onSubmit }: Props) => {
  return (
    <div>
      <Button fullWidth={true} color="primary" onClick={onSubmit}>
        delete
      </Button>
    </div>
  );
};

export default DeleteUserForm;
