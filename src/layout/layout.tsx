// import Footer from "../components/Footer/Footer";
import BottomTab from "../components/BottomTab";
import Header from "../components/Header/Header";
import { useUser } from "../hooks/auth/useUser";
import RootNavigation from "../routes";

const Layout = () => {
  const { user } = useUser();

  console.log(user);
  return (
    <>
      {user && <Header />}
      <main>
        <RootNavigation />
      </main>
      {user && <BottomTab />}
    </>
  );
};
export default Layout;
