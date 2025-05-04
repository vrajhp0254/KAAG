import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import LogoutButton from "./Logout";

// ProtectedRoute component to check if the user is admin
const ProtectedRoute = ({ element }) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return (
    <div className="relative">
      <LogoutButton />
      {element}
    </div>
  );
};

export default ProtectedRoute;
