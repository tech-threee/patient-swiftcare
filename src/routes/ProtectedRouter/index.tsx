import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/Home";
import HealthBlog from "../../pages/HealthBlog";
import BookAppointment from "../../pages/BookAppointment";
import HealthTip from "../../pages/HealthTip";
import Notification from "../../pages/Notification";
import ViewHealthBlog from "../../pages/HealthBlog/ViewHealthBlog";

const ProtectedRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/healthBlog" element={<HealthBlog />} />
      <Route path="/bookAppointment" element={<BookAppointment />} />
      <Route path="/healthTip" element={<HealthTip />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/viewHealthBlog" element={<ViewHealthBlog />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default ProtectedRouter;
