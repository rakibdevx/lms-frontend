import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const lmsUser = JSON.parse(localStorage.getItem("lmsUser"));

  if (!lmsUser || !lmsUser.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;