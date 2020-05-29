import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-fetching-library";
import { UserInput } from "../components/AddUserForm";
import { AdminUser } from "../components/AdminUser";
import { addUserAction, deleteUserAction } from "../utils";

export const AdminUserContainer = () => {
  const [users, setUser] = useState<any[]>([]);
  const [indexDel, setIndexDel] = useState<number | undefined>();
  const { loading, payload, mutate, error } = useMutation(addUserAction);
  const {
    loading: loadingDel,
    error: errorDel,
    mutate: delMutation,
    status,
  } = useMutation(deleteUserAction);

  const handleSubmit = useCallback(
    (formValues: UserInput) => {
      mutate(formValues);
    },
    [mutate]
  );

  useEffect(() => {
    payload &&
      !loading &&
      !error &&
      setUser([
        ...users,
        { id: payload.name, name: payload.name, job: payload.job },
      ]);
  }, [payload, setUser, loading, error]);

  const handleUserDelete = useCallback(
    (userId: number) => {
      setIndexDel(userId);
      delMutation(userId);
    },
    [delMutation]
  );

  useEffect(() => {
    if (status === 204 && !loadingDel && !errorDel) {
      let newUsers = [...users];
      newUsers = newUsers.filter((user) => user.id !== indexDel);
      setUser(newUsers);
      setIndexDel(undefined);
    }
  }, [status, loadingDel, errorDel]);

  return (
    <AdminUser
      users={users}
      handleSubmit={handleSubmit}
      handleUserDelete={handleUserDelete}
      loading={loading}
    />
  );
};
