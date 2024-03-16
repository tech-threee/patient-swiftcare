import { useContext } from "react";
import { UserCredentialsContext } from "../../context/Auth/UserCredentialsContext";
import { UserCredentialsContextType } from "../../types/userCrendentials.types";

export const useUserCredentials = (): UserCredentialsContextType => {
  const context = useContext(UserCredentialsContext);
  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");

  return context;
};
