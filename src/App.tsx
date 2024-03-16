import "./App.css";
import { UserProvider } from "./context/Auth/UserContext";
import Layout from "./layout/layout";
import { UserCredentialsProvider } from "./context/Auth/UserCredentialsContext";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <UserCredentialsProvider>
      <UserProvider>
        <Layout />
        <ToastContainer />
      </UserProvider>
    </UserCredentialsProvider>
  );
};
export default App;
