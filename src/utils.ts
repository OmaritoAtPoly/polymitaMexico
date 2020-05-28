import { Action } from 'react-fetching-library';

export const apiPath = process.env.REACT_APP_API || "https://reqres.in/api";

export const getEndPointPath = (path: string, search?: string) =>
  `${apiPath}/${path}${search}`;
