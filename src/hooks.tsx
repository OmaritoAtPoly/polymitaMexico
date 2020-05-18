import { compareSync } from "bcryptjs";
import { PointOptionsObject } from "highcharts";
import jwt from "jsonwebtoken";
import { useMemo, useState } from "react";
import { Action, useSuspenseQuery } from "react-fetching-library";
import users from "./services/mochData";
import { User } from "./types";

export const useSumValuesByKey = ({
  data,
  key,
  value,
}: {
  data: any[];
  key: string;
  value: string;
}) => {
  const dataMap = useMemo(() => {
    const map = new Map();
    const result: PointOptionsObject[] = [];
    data.forEach((elem) => {
      map.set(
        elem[key],
        map.get(elem[key]) ? map.get(elem[key]) + elem[value] : 1
      );
    });
    map.forEach((value, key) => {
      result.push({
        x: key,
        y: value,
      });
    });

    return result;
  }, [data, key, value]);
  return { dataMap };
};

const fetchUsersList: Action<any, any> = {
  method: "GET",
  endpoint:
    process.env.REACT_APP_API ||
    "https://api.github.com/repositories/19438/issues",
};

export const useQueryApi = () => {
  return useSuspenseQuery(fetchUsersList);
};

export const useLogin = () => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [error, setError] = useState<boolean | undefined>(false);
  const login = (userName: string | undefined, password: string | undefined) => {
    const currentUser = users.find((user) => {
      return user.name === userName;
    });
    if (!currentUser) {
      setCurrentUser(undefined);
      setError(true);
      return;
    }
    const samePassword = compareSync(password || "", currentUser.keyword);
    if (samePassword) {
      const secretWord = process.env.REACT_APP_SECRET;
      const token = jwt.sign({ currentUser }, secretWord!, {
        expiresIn: 300000,
      });
      localStorage.setItem("isLogged", token);
      setCurrentUser(currentUser);
      setError(false);
    } else {
      setCurrentUser(undefined);
      setError(true);
    }
  };
  return { currentUser, login, error, setError };
};
