import SideMessage from "../../../components/Auth/SideMessage";
import LoginForm from "../../../components/Auth/Forms/LoginForm";

const Login = () => {
  return (
    <>
      <main className="flex flex-col h-full w-full overflow-hidden">
        <div className="md:flex flex-row justify-between">
          <LoginForm />

          <SideMessage />
        </div>
      </main>
    </>
  );
};

export default Login;
