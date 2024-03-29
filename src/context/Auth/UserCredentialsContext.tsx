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
    phone: "",
    dob: "",
    otp: [],
  });

  return (
    <UserCredentialsContext.Provider
      value={{ userCredentials, setUserCredentials }}
    >
      {children}
    </UserCredentialsContext.Provider>
  );
};
