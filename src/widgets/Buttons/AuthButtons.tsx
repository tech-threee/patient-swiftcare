type AuthButtonsProps = {
  text: string;
  handleAction?: (email: string) => void;
};

const AuthButtons: React.FC<AuthButtonsProps> = ({ text, handleAction }) => {
  return (
    <button
      onClick={() => handleAction && handleAction("some-email@example.com")} // Check if onSendOtp is provided before calling
      type="button"
      className="text-white bg-[#2563EB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {text}
    </button>
  );
};

export default AuthButtons;
