import camelcaseKeys from "camelcase-keys";
import React, { useMemo } from "react";
import ListLayout from "../components/ListLayout";
import User from "../components/User";
import { dataApi } from "../dataApi";
import { User as UserType } from "../typings";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom'

const Users = () => {
  const dataPrepared = useMemo<UserType[]>(
    () => dataApi.data.map((item) => camelcaseKeys(item)) as any,
    []
  );
  const { push } = useHistory();

  return (
    <ListLayout>
      {dataPrepared.map((data) => (
        <User key={data.id} {...data} />
      ))}
   <Button onClick={() => push('/')}>Go back</Button>
    </ListLayout>
  );
};

export default Users;
