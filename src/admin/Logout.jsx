import { useAuth } from "./AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // First perform logout
    logout();
    // Force navigation to home page with replace to prevent back navigation
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 absolute top-4 right-4"
    >
      Logout
    </button>
  );
};

export default LogoutButton; 