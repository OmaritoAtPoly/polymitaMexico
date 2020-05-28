import camelcaseKeys from "camelcase-keys";
import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../components/Alert";
import ListLayout from "../components/ListLayout";
import User from "../components/User";
import { useQueryUsers } from "../hooks";
import { User as UserType } from "../typings";

const UsersContainer = () => {
  const { location } = useHistory();
  const { payload, error } = useQueryUsers("users", location.search);
  const [alertError, setAlertError] = useState(error);

  const dataPrepared = useMemo<UserType[]>(() => {
    const data = !payload || payload.message ? [] : payload.data;
    return data.map((item: any) => camelcaseKeys(item)) as any;
  }, [payload]);

  const closeError = useCallback(() => {
    setAlertError(false);
  }, [setAlertError]);

  return (
    <>
      <ListLayout>
        {dataPrepared.map((data) => (
          <User {...data} />
        ))}
      </ListLayout>
      <Alert
        message="There was a problem with the server"
        open={alertError}
        onClose={closeError}
      />
    </>
  );
};

export default UsersContainer;
