import React from 'react'
import { useBulkMutation } from 'react-fetching-library';
import DeleteUserForm from '../components/DeleteUserForm';
import { deleteUserAction } from '../helpers/fetchUserList';

export const DeleteUserFormContainer = () => {
  const { loading, responses, mutate, reset, abort } = useBulkMutation(deleteUserAction);


  const handleSubmit = async (selectedUsers: any) => {

    const responses = await mutate(selectedUsers);

    const errors = responses.filter((response: any) => response).map((response: any) => response.error);


    if (errors.length > 0) {
      //show ie. notification
    }
    console.log(`everything goes well`)
  }

  return <DeleteUserForm onSubmit={handleSubmit} />;
};