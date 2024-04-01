/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { Navigate } from "react-router-dom";
import PageLoading from "../components/common/loadings/PageLoading";

const VerificationPrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <PageLoading />;
  }

  if (isLoading === false && !user) {
    return <Navigate to="/login" />;
  } else {
    if (
      isLoading === false &&
      user?.profile?.verification_status === "Approved"
    ) {
      return children;
    } else {
      return <Navigate to="/account-verification" />;
    }
  }
};

export default VerificationPrivateRoute;
