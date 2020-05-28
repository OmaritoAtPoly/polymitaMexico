import React, { useEffect } from 'react';
import { AddUserForm, UserInput } from '../AddUserForm';
import { useMutation } from 'react-fetching-library';
import { addUserAction } from '../helpers/fetchUserList';


const CreateUsers = () => {
        const { loading, payload, mutate, error, reset, abort } = useMutation(addUserAction)



        const showUser = async () => {
                // if (payload) await document.write(payload.name)
                if(payload)
                return payload.name;
        }

        useEffect(() => { showUser() }
                , [payload]);


        const handleSubmit = async (formValues: UserInput) => {

                const { error: mutateError } = await mutate(formValues);

                if (mutateError) {
                        console.log(error);
                }

                console.log(showUser());
                // setUsers(values);
                // return <AddUserForm loading={loading} handleSubmit={} />
        }
        
        if (loading) return <div>loading</div>
        return <AddUserForm loading={false} error={'error'} handleSubmit={handleSubmit} />
}






export default CreateUsers;