import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useMutation } from 'react-fetching-library';
import { addUserAction } from '../helpers/fetchUserList';
import { AddUserForm, UserInput } from '../AddUserForm';

const Dashboard = () => {
        const { push } = useHistory();
        const [users, setUsers] = useState({});
        let values = {};

        // const formValues = {
        //         "name": "morpheus",
        //         "job": "leader",
        //         "nickname": "animal"
        // }


        const handleShowUsers = () => {
                push('/users');
        }

        const { loading, payload, mutate, error, reset, abort } = useMutation(addUserAction)

        useEffect(() => { showUser() }
                , [payload]);

        const handleAddUsers = () => {
                push('/addUsers');
                // return <AddUserForm loading={loading} error={error} handleSubmit={handleSubmit}/>

        }

        // if (loading) return <div>loading</div>

        // const handleSubmit = async (formValues: any) => {

        //         const { error: mutateError } = await mutate(formValues);

        //         if (mutateError) {
        //                 console.log(error);
        //         }

        //         console.log(payload);
        //         // setUsers(values);
        //         // return <AddUserForm loading={loading} handleSubmit={} />
        // }


        const showUser = async () => {
                if (payload) await document.write(payload.name)
                return payload;
        }
        //////
        return (
                <div>
                        <span><Button onClick={() => handleShowUsers()}>List all Users</Button></span>
                        {/* <span><Button onClick={() => handleSubmit()}>Add new Users</Button></span> */}
                        <span><Button onClick={handleAddUsers}>Add new Users</Button></span>

                </div>)
}

export default Dashboard;