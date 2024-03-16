import ResetPasswordForm from "../../../components/Auth/Forms/ResetPasswordForm";
import SideMessage from "../../../components/Auth/SideMessage";

const ResetPassword = () => {
  return (
    <>
      <main className="flex flex-col h-full w-full overflow-hidden">
        <div className="md:flex flex-row justify-between">
          <ResetPasswordForm />

          <SideMessage />
        </div>
      </main>
    </>
  );
};
export default ResetPassword;
