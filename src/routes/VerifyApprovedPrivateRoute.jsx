/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import PageLoading from "../components/common/loadings/PageLoading";

const VerifyApprovedPrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

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
      return navigate(-1);
    } else {
      return children;
    }
  }
};
export default VerifyApprovedPrivateRoute;
