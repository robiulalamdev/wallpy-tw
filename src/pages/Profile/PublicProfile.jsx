import { useParams } from "react-router-dom";
import ProfileMain from "../../components/profile/ProfileMain";
import { useGetPublicUserInfoQuery } from "../../redux/features/users/usersApi";

const PublicProfile = () => {
  const { username } = useParams();
  const { data } = useGetPublicUserInfoQuery(username);
  console.log(data);

  return (
    <>
      <ProfileMain user={data?.data} />
    </>
  );
};

export default PublicProfile;
