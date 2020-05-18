import jwt from "jsonwebtoken";

export const isLogged = () => {
  const token = localStorage.getItem("isLogged");
  return !!token;
};

export const userLogOut = () => {
  localStorage.removeItem("isLogged");
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("isLogged");
  const secretWord = process.env.REACT_APP_SECRET;
  if (token) {
    const currentUser = jwt.verify(token, secretWord!);
    return currentUser;
  }
  return;
};
