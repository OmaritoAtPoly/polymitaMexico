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




// const [users, setUser] = useState<any[]>([])
// const { loading, payload, mutate, error, reset, abort } = useMutation(addUserAction)

// const addUser = async () => {
//   if (payload) {
//     setUser([...users, { name: payload.name, job: payload.job }])
//   }
// }

// useEffect(() => {
//   addUser()
// }, [payload]);

// const handleSubmit = async (formValues: UserInput) => {
//   await mutate(formValues);
// }