import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

function ProtectedRoute({ children, role, redirectTo = "/" }) {

  const auth = useAuth();

  if (!auth.isAuth) {
    return <Navigate replace to={redirectTo} />;
  }

  if (auth.user.userRole == role) {
   return <>{children}</>;
  } 

  return <Navigate replace to={redirectTo} />;
}
 
export default ProtectedRoute;