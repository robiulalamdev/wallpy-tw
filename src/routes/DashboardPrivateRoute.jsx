/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { Navigate } from "react-router-dom";
import PageLoading from "../components/common/loadings/PageLoading";

const DashboardPrivateRoute = ({ allowedRoles = [], children }) => {
  const { user, isLoading } = useContext(AuthContext);
  console.log("allowed ", allowedRoles);

  if (isLoading) {
    return <PageLoading />;
  }

  if (
    isLoading === false &&
    !allowedRoles.some((role) => role === user?.role)
  ) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default DashboardPrivateRoute;
