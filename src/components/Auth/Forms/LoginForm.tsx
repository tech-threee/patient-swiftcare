import { Link } from "react-router-dom";
import AuthButtons from "../../../widgets/Buttons/AuthButtons";

const LoginForm = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center">
      <div className="p-10 space-y-10">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-bold text-2xl leading-10">Create An account</h1>
          <p className="text-sm text-gray-600">Welcome to swift connect</p>
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

          {/**Check Boxes */}
          <div className="mb-5">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500 dark:text-gray-300">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
          </div>

          {/**Button */}
          <AuthButtons />

          {/**Login Question */}
          <div className="flex flex-row items-center space-x-2">
            <p className="text-gray-600">Don't have an account?</p>
            <Link
              to="/register"
              className="text-[#2563EB] font-bold  hover:underline"
            >
              Register with us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
