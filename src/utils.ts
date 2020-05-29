import { Action } from "react-fetching-library";

export const getEndPointPath = (path: string, search?: string) =>
  `/${path}${search}`;

export const fetchUsersAction = (
  path: string,
  search?: string
): Action<any, any> => {
  return {
    method: "GET",
    endpoint: getEndPointPath(path, search),
  };
};

export const addUserAction = (formValues: any): Action<any> => ({
  method: "POST",
  endpoint: "/users",
  body: formValues,
});

export const deleteUserAction = (id: number): Action<any> => ({
  method: 'DELETE',
  endpoint: '/users?id=' + id
});