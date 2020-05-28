import camelcaseKeys from "camelcase-keys";
import React, { useMemo } from "react";
import ListLayout from "../components/ListLayout";
import User from "../components/User";
import { dataApi } from "../dataApi";
import { User as UserType } from "../typings";

const Users = () => {
  const dataPrepared = useMemo<UserType[]>(
    () => dataApi.data.map((item) => camelcaseKeys(item)) as any,
    []
  );

  return (
    <ListLayout>
      {dataPrepared.map((data) => (
        <User {...data} />
      ))}
    </ListLayout>
  );
};

export default Users;
