import ProtectedRouter from "./ProtectedRouter/index";
import AuthRouters from "./AuthRouters/index";

const RootNavigation = () => {
  const user = true as boolean;

  return user ? <ProtectedRouter /> : <AuthRouters />;
};
export default RootNavigation;
