import { useContext } from "react";
import { UserContext } from "../../context/Auth/UserContext";
import { UserContextType } from "../../types/user.types";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");

  return context;
};
