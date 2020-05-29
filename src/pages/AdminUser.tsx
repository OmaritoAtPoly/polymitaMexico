import React, { useCallback } from "react";
import { AdminUserContainer } from "../containers/AdminUserContainer";
import { Header } from "../components/Header";
import { useHistory } from "react-router-dom";

export const AdminUser = () => {
  const { push } = useHistory();

  const handleOnClick = useCallback(() => {
    push("/");
  }, [push]);

  return (
    <>
      <Header buttonText={"Go back"} handleOnClick={handleOnClick} />
      <AdminUserContainer />
    </>
  );
};
