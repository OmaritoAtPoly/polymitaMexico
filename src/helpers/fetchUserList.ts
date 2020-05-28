import { Action } from 'react-fetching-library';

export const fetchUsersList: Action = {
  method: 'GET',
  endpoint: '/users',
};

export const addUserAction = (formValues: any): Action<any> => ({
  method: 'POST',
  endpoint: '/users',
  body: formValues,
});

export const deleteUserAction = (id: number): Action<any> => ({
  method: 'DELETE',
  endpoint: '/users?id=' + id
});
