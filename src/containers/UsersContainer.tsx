import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../components/Alert";
import ListLayout from "../components/ListLayout";
import User from "../components/User";
import { useQueryUsers } from "../hooks";

const UsersContainer = () => {
  const { location } = useHistory();
  const { payload, error } = useQueryUsers("users", location.search);
  const [alertError, setAlertError] = useState(error);

  const dataPrepared = useMemo<any[]>(() => {
    const data = !payload || payload.message ? [] : payload.data;
    return data.map((item: any) => {
      return {
        ...item,
        title: `${item.first_name} ${item.last_name}`,
        subTitle: item.email,
      };
    }) as any;
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
