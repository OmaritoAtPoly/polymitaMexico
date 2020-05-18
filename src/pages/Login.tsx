import { makeStyles } from "@material-ui/core/styles";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";
import { useLogin } from "../hooks";
import { isLogged } from "../services/Auth";
import Alert from "../components/Alert";

interface Props {
  onClick: (user: string, password: string) => void;
  history: any;
}

const Login = () => {
  const [userName, setUser] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const classes = useStyles();
  const { push } = useHistory();
  const { currentUser, login, error: alertError, setError } = useLogin();

  const closeError = useCallback(() => {
    setError(false);
  }, [setError]);

  const handleLogin = useCallback(() => {
    login(userName, password);
  }, [userName, password, login]);

  useEffect(() => {
    if (currentUser) {
      push("/");
    }
  }, [currentUser, push]);

  if (isLogged()) push("/");

  return (
    <div className={classes.container}>
      <Text title={"Sign in"} />
      <div className={classes.fields}>
        <Input
          style={{ paddingBottom: "4px" }}
          typeVariant={"login"}
          value={userName}
          placeholder={"User"}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setUser(event.target.value)}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setPassword(event.target.value)}
          typeVariant={"login"}
        />
      </div>
      <Button
        style={{ minWidth: 390, marginTop: "4px" }}
        label={"Login"}
        fullWidth={false}
        typeVariant={"primary"}
        onClick={handleLogin}
      />
       <Alert
        message="the username or password is incorrect"
        open={alertError}
        onClose={closeError}
      />
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    minHeight: "100vh",
    justifyContent: "center",
  },
  fields: {
    minWidth: 390,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: 54,
    color: "white",
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  center: { textAlign: "center" },
});

export default Login;
