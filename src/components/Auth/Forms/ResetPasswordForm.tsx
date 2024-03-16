import AuthButtons from "../../../widgets/Buttons/AuthButtons";

const ResetPasswordForm = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center">
      <div className="p-10 space-y-10">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-bold text-2xl leading-10">Reset Password</h1>
          <p className="text-sm text-gray-600">forgotten Password No worries</p>
        </div>

        {/**Form*/}
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="example@gmail.com"
            />
          </div>

          {/**Button */}
          <AuthButtons />
        </div>
      </div>
    </div>
  );
};
export default ResetPasswordForm;
