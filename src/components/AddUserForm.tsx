import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

export type UserInput = {
  name: string;
  job: string;
};

const initialValues = {
  name: "",
  job: "",
};

interface Props {
  loading: boolean;
  handleSubmit: (userInput: UserInput) => void;
}

export const AddUserForm = ({ loading, handleSubmit }: Props) => {
  const classes = useStyles();
  const { push } = useHistory();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("This field is required"),
        job: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("This field is required"),
      })}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form className={classes.form}>
          <Typography variant="h4" color="primary" component="h4" className={classes.label}>
            Create User
          </Typography>
          <div className={classes.container}>
            <div className={classes.formGroup}>
              <TextField
                className={classes.input}
                variant="outlined"
                size="small"
                label="Name"
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <ErrorMessage name="name" />
            </div>
            <div className={classes.formGroup}>
              <TextField
                className={classes.input}
                variant="outlined"
                size="small"
                label="job"
                onChange={handleChange("job")}
                onBlur={handleBlur("job")}
                value={values.job}
              />
              <ErrorMessage name="job" />
            </div>
            <div className={classes.submit}>
              <Button
                disabled={loading}
                type="submit"
                variant="contained"
                size="small"
                color="primary"
              >
                Create
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const useStyles = makeStyles({
  form: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    height: "17rem",
    border: "1px solid #ccc",
    padding: ".5rem",
    marginTop: "1rem",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    width: "100%",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    width: "inherit",
    margin: ".5rem",
  },
  submit: {
    display: "flex",
    justifyContent: "flex-end",
    width: "inherit",
    margin: ".5rem",
  },
  label: {
    width: "80%",
  }
});
