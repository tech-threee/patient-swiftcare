import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "../../pages/Auth/Register";
import Login from "../../pages/Auth/Login/index";

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
export default AuthRouters;
