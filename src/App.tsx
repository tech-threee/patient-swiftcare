import "./App.css";
import { Toaster } from "sonner";
import { UserProvider } from "./context/Auth/UserContext";
import Layout from "./layout/layout";
import { UserCredentialsProvider } from "./context/Auth/UserCredentialsContext";

const App: React.FC = () => {
  return (
    <UserCredentialsProvider>
      <UserProvider>
        <Layout />
        <Toaster richColors position="top-center" />
      </UserProvider>
    </UserCredentialsProvider>
  );
};
export default App;
