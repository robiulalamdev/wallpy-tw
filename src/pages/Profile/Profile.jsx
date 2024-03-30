/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthContext";
import ProfileMain from "../../components/profile/ProfileMain";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ProfileMain user={user} />
    </>
  );
};

export default Profile;
