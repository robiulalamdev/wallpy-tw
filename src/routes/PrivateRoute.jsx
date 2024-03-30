/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { Navigate } from "react-router-dom";
import PageLoading from "../components/common/loadings/PageLoading";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <PageLoading />;
  }

  if (isLoading === false && !user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
