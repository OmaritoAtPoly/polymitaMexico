import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Text from "../components/Text";

interface Props {
  onClick: (user: string, password: string) => void;
  history: any;
}

const Login = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleLogin = () => {
    push('/users');
  }


  return (
    <div className={classes.container}>
      <Text title={"Welcome"} />
      <div className={classes.fields}>

      </div>
      <Button
        style={{ minWidth: 390, marginTop: "4px" }}
        label={"Login"}
        fullWidth={false}
        typeVariant={"primary"}
        onClick={handleLogin}
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
