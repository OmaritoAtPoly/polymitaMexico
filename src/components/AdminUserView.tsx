import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { AddUserForm } from '../AddUserForm'
import { UsersList } from './UserList'

interface Props {
    users: any[];
    deleteUser: (id: number) => void;
    onCreateUserLoading: boolean;
    createUser: (user: any) => void;


}

export const AdminUserView = ({ users, deleteUser, onCreateUserLoading, createUser }: Props) => {
    const classes = useStyles()
    return (
        <Container>
            <div className={classes.row} >
                <UsersList users={users} onUserDelete={deleteUser} />
                <AddUserForm loading={onCreateUserLoading} handleSubmit={createUser} />
            </div>
        </Container>
    )
}

const useStyles = makeStyles({
    row: {
        display: 'flex',
        justifyContent: 'center'
    }
});
