import { useSuspenseQuery } from "react-fetching-library";
import { fetchUsersAction } from "./utils";


export const useQueryUsers = (path: string, search?: string) => {
  return useSuspenseQuery(fetchUsersAction(path, search));
};

