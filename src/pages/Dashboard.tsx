import React, { useCallback, useState } from "react";
import Alert from "../components/Alert";
import { Header } from "../components/Header";
import Suspense from "../components/Suspense";
import ColumnChart from "../containers/ColumnChart";
import PieChart from "../containers/PieChart";
import { getCurrentUser, isLogged } from "../services/Auth";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [initialMessage, setInitialMessage] = useState<boolean>(isLogged());
  const { push } = useHistory();

  const closeError = useCallback(() => {
    setInitialMessage(false);
  }, [setInitialMessage]);

  const storage = getCurrentUser() as any;

  if (!isLogged()) push("/login");

  return (
    <>
      <Header />
      <Suspense>
        {storage?.currentUser?.roll === "comments_reviewer" && <ColumnChart />}
        {storage?.currentUser?.roll === "issue_reviewer" && <PieChart />}
      </Suspense>
      <Alert
        message="Welcome to your dashboard"
        open={initialMessage}
        onClose={closeError}
        severity="success"
      />
    </>
  );
};

export default Dashboard;
