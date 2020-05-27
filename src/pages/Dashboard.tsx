import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useMutation } from 'react-fetching-library';
import { addUserAction } from '../helpers/fetchUserList';

const Dashboard = () => {
        const { push } = useHistory();
        const formValues = {
                "name": "morpheus",
                "job": "leader",
                "nickname": "animal"
        }

        const handleShowUsers = () => {
                push('/users');
        }

        const handleAddUsers = () => {
                push('/addUsers');
        }
        /////
        const { loading, payload, mutate, error, reset, abort } = useMutation(addUserAction)

        useEffect(() => { showUser() }
                , [payload]);


        if (loading) return <div>loading</div>

        const handleSubmit = async () => {

                const { error: mutateError } = await mutate(formValues);

                if (mutateError) {
                        console.log(error);
                }

                return showUser();
        }


        const showUser = async () => {
                if (payload) await document.write(payload.name)
                return payload;
        }
        //////
        return (
                <div>
                        <span><Button onClick={() => handleShowUsers()}>List all Users</Button></span>
                        <span><Button onClick={() => handleSubmit()}>Add new Users</Button></span>

                </div>)
}

export default Dashboard;