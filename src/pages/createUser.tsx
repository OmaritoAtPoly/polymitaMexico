import React, { useEffect, useState } from 'react';
import { AddUserForm, UserInput } from '../AddUserForm';
import { useMutation } from 'react-fetching-library';
import { addUserAction } from '../helpers/fetchUserList';
import { UserItem } from '../components/UserItem';
import Container from '../atoms/Container';
import ListLayout from '../components/ListLayout';
import { margin } from 'polished';


const CreateUsers = () => {
        const [users, setUser] = useState<any[]>([])
        const { loading, payload, mutate, error, reset, abort } = useMutation(addUserAction)

        const addUser = async () => {
                if (payload) {
                        setUser([...users, { name: payload.name, job: payload.job }])
                }
        }

        useEffect(() => {
                addUser()
        }, [payload]);

        const handleSubmit = async (formValues: UserInput) => {
                await mutate(formValues);
        }
        return (
                <Container>
                        <div style={{ display: 'flex' }} >
                                <div style={{ width: '40%', minHeight: '50vp', padding: '.5rem', border: '1px solid #ccc', marginTop: '2rem' }} >
                                        <ListLayout>
                                                {users.map((user: any, index: number) => (
                                                        <UserItem key={index} name={user.name} job={user.job} />
                                                ))}
                                        </ListLayout>

                                </div>
                                <AddUserForm loading={loading} error={'error'} handleSubmit={handleSubmit} />
                        </div>

                </Container>
        )
}
export default CreateUsers;