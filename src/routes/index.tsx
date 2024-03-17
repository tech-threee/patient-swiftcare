import ProtectedRouter from "./ProtectedRouter/index";
import AuthRouters from "./AuthRouters/index";
import { useUser } from "../hooks/auth/useUser";

const RootNavigation = () => {
  const { user } = useUser();

  return user ? <ProtectedRouter /> : <AuthRouters />;
};
export default RootNavigation;
