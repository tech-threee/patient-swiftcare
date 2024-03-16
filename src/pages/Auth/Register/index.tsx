import RegisterForm from "../../../components/Auth/Forms/RegisterForm";
import SideMessage from "../../../components/Auth/SideMessage";

const Register = () => {
  return (
    <>
      <main className="flex flex-col h-full w-full overflow-hidden">
        <div className="md:flex flex-row justify-between">
          {/***User Form  */}
          <RegisterForm />

          {/***Background Color */}
          <SideMessage />
        </div>
      </main>
    </>
  );
};

export default Register;
