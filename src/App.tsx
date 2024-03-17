import "./App.css";
import { UserProvider } from "./context/Auth/UserContext";
import Layout from "./layout/layout";
import { UserCredentialsProvider } from "./context/Auth/UserCredentialsContext";
import CustomToastContainer from "./widgets/CustomToastContainer";

const App: React.FC = () => {
  return (
    <UserCredentialsProvider>
      <UserProvider>
        <Layout />
        <CustomToastContainer />
      </UserProvider>
    </UserCredentialsProvider>
  );
};
export default App;
