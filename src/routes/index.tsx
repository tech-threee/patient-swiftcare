import ProtectedRouter from "./ProtectedRouter/index";
import AuthRouters from "./AuthRouters/index";

const RootNavigation = () => {
  const user = false as boolean;

  return user ? <ProtectedRouter /> : <AuthRouters />;
};
export default RootNavigation;
