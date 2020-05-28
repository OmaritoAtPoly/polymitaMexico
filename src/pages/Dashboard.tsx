import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from "react-router-dom";

const Dashboard = () => {
        const { push } = useHistory();

        const handleShowUsers = () => {
                push('/users');
        }

        const handleAddUsers = () => {
                push('/addUsers');
        }

        return (
                <div>
                        <span><Button onClick={handleShowUsers}>List all Users</Button></span>
                        <span><Button onClick={handleAddUsers}>Add new Users</Button></span>
                </div>)
}

export default Dashboard;