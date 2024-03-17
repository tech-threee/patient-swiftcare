import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "../../pages/Auth/Register";
import Login from "../../pages/Auth/Login/index";
import EmailVerification from "../../pages/Auth/EmailVerification";

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verifyEmail" element={<EmailVerification />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
export default AuthRouters;
