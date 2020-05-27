import { Action } from 'react-fetching-library';

export const fetchUsersList: Action = {
  method: 'GET',
  endpoint: '/users',
};
export const deleteUserAction = (user:any):Action<any> => ({
  method: 'DELETE',
  endpoint: '/users?id=' + user.id
});