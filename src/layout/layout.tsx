// import Footer from "../components/Footer/Footer";
import BottomTab from "../components/BottomTab";
import Header from "../components/Header/Header";
import RootNavigation from "../routes";

const Layout = () => {
  const user = true as boolean;

  console.log(user);
  return (
    <>
      {user === true && <Header />}
      <main>
        <RootNavigation />
      </main>
      {user === true && <BottomTab />}
    </>
  );
};
export default Layout;
