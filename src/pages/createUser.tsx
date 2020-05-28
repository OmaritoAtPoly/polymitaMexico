import React, { useEffect } from 'react';
import { AddUserForm, UserInput } from '../AddUserForm';
import { useMutation } from 'react-fetching-library';
import { addUserAction } from '../helpers/fetchUserList';
import { UserItem } from '../components/UserItem';
import Container from '../atoms/Container';


const CreateUsers = () => {
        const { loading, payload, mutate, error, reset, abort } = useMutation(addUserAction)

        // const showUser = async () => {
        //         // if (payload) await document.write(payload.name)
        //         if (payload)
        //                 return payload.name;
        // }

        // useEffect(() => { showUser() }
        //         , [payload]);

        const handleSubmit = async (formValues: UserInput) => {
                await mutate(formValues);
                // console.log(showUser());
                // setUsers(values);
                // return <AddUserForm loading={loading} handleSubmit={} />
        }
        return (
                <Container>
                        <UserItem name={'Asio'} job={'Programmer'} />
                </Container>
        )
        // if (loading) return <div>loading</div>
        // if (error) return <div>Error</div>
        // if (payload) return <div>{payload.name}</div>
        // return <AddUserForm loading={false} error={'error'} handleSubmit={handleSubmit} />
}
export default CreateUsers;