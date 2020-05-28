import camelcaseKeys from "camelcase-keys";
import React, { useMemo } from "react";
import ListLayout from "../components/ListLayout";
import User from "../components/User";
import { dataApi } from "../dataApi";
import { User as UserType } from "../typings";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router-dom'

const Users = () => {
  const classes = useStyles()
  const dataPrepared = useMemo<UserType[]>(
    () => dataApi.data.map((item) => camelcaseKeys(item)) as any,
    []
  );
  const { push } = useHistory();

  return (
    <span>
      <ListLayout>
        {dataPrepared.map((data) => (
          <User key={data.id} {...data} />
        ))}
      </ListLayout>
      <Button variant="contained" size='small' color="default" onClick={() => push('/')} className={classes.goBack}>Go back</Button>
    </span>
  );
};

export default Users;


const useStyles = makeStyles({
  goBack:{
    marginLeft:'60px',
    marginBottom:'10px'
  }
})