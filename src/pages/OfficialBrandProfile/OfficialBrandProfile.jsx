import { useContext } from "react";

import OfficialBrandProfileMain from "../../components/officialBrandProfile/OfficialBrandProfileMain";
import { AuthContext } from "../../contextApi/AuthContext";

const OfficialBrandProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <OfficialBrandProfileMain user={user} />
    </>
  );
};

export default OfficialBrandProfile;
