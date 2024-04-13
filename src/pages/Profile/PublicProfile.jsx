import { useParams } from "react-router-dom";
import ProfileMain from "../../components/profile/ProfileMain";
import { useGetPublicUserInfoQuery } from "../../redux/features/users/usersApi";
import PageLoading from "../../components/common/loadings/PageLoading";
import ErrorPageMain from "../../components/common/errorPages/ErrorPageMain";

const PublicProfile = () => {
  const { username } = useParams();
  const { data, isLoading } = useGetPublicUserInfoQuery(username);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          {data?.data ? <ProfileMain user={data?.data} /> : <ErrorPageMain />}
        </>
      )}
    </>
  );
};

export default PublicProfile;