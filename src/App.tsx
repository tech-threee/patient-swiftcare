import "./App.css";
import { UserProvider } from "./context/Auth/UserContext";
import Layout from "./layout/layout";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
};
export default App;
