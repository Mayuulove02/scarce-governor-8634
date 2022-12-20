import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {

    return (
        alert("You Need To Login First"),
        <Navigate to="/login" />
    )
  }

  return children;
}

export default PrivateRoute;
