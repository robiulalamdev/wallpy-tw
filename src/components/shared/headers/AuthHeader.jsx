import { Link } from "react-router-dom";
import logo from "../../../assets/brand/logo.png";

const AuthHeader = () => {
  return (
    <>
      <div className="md:flex items-center justify-between w-full mt-[23px] hidden md:inline-block">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[85px] h-[56px] object-contain cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
};

export default AuthHeader;
