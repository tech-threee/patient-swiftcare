import React, { createContext, useState, ReactNode } from "react";
import {
  UserCredentialsContextType,
  UserCredentials,
} from "../../types/userCrendentials.types";

export const UserCredentialsContext = createContext<
  UserCredentialsContextType | undefined
>(undefined);

type UserCredentialsProviderProps = {
  children: ReactNode;
};

export const UserCredentialsProvider: React.FC<
  UserCredentialsProviderProps
> = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    name: "",
    email: "",
    phone: 0,
    dob: "",
    otp: 0,
  });

  return (
    <UserCredentialsContext.Provider
      value={{ userCredentials, setUserCredentials }}
    >
      {children}
    </UserCredentialsContext.Provider>
  );
};
