/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { Navigate } from "react-router-dom";
import { SpinnerDiamond } from "spinners-react";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <SpinnerDiamond
          size={90}
          thickness={138}
          speed={180}
          color="rgba(57, 172, 82, 1)"
          secondaryColor="rgba(57, 172, 82, 0.37)"
        />
      </div>
    );
  }

  if (isLoading === false && !user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
