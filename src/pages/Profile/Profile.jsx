/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthContext";
import ProfileMain from "../../components/profile/ProfileMain";
import OfficialBrandProfileMain from "../../components/officialBrandProfile/OfficialBrandProfileMain";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user?.profile?.profile_type === "Brand" ? (
        <OfficialBrandProfileMain user={user} />
      ) : (
        <ProfileMain user={user} />
      )}
    </>
  );
};

export default Profile;
