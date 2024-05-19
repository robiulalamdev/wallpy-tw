import { useParams } from "react-router-dom";
import ProfileMain from "../../components/profile/ProfileMain";
import { useGetPublicUserInfoQuery } from "../../redux/features/users/usersApi";
import PageLoading from "../../components/common/loadings/PageLoading";
import ErrorPageMain from "../../components/common/errorPages/ErrorPageMain";
import OfficialBrandProfileMain from "../../components/officialBrandProfile/OfficialBrandProfileMain";

const PublicProfile = () => {
  const { username } = useParams();
  const { data, isLoading } = useGetPublicUserInfoQuery(username);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          {data?.data ? (
            <>
              {data?.data?.profile?.profile_type === "Brand" ? (
                <OfficialBrandProfileMain user={data?.data} />
              ) : (
                <ProfileMain user={data?.data} />
              )}
            </>
          ) : (
            <ErrorPageMain />
          )}
        </>
      )}
    </>
  );
};

export default PublicProfile;
