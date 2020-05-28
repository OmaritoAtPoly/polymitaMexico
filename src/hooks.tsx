import { Action, useSuspenseQuery } from "react-fetching-library";
import { getEndPointPath } from "./utils";

export const fetchUsersAction = (
  path: string,
  search?: string
): Action<any, any> => {
  return {
    method: "GET",
    endpoint: getEndPointPath(path, search),
  };
};

export const useQueryUsers = (path: string, search?: string) => {
  return useSuspenseQuery(fetchUsersAction(path, search));
};

export const addUserAction = (formValues: any): Action<any> => ({
  method: 'POST',
  endpoint: '/users',
  body: formValues,
});
