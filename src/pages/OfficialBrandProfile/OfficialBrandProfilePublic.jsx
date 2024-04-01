import { useParams } from "react-router-dom";
import { useGetPublicUserInfoQuery } from "../../redux/features/users/usersApi";
import OfficialBrandProfileMain from "../../components/officialBrandProfile/OfficialBrandProfileMain";
import PageLoading from "../../components/common/loadings/PageLoading";
import ErrorPageMain from "../../components/common/errorPages/ErrorPageMain";

const OfficialBrandProfilePublic = () => {
  const { username } = useParams();
  const { data, isLoading } = useGetPublicUserInfoQuery(username);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          {data?.data &&
          data?.data?.profile?.verification_status === "Approved" ? (
            <OfficialBrandProfileMain user={data?.data} />
          ) : (
            <ErrorPageMain />
          )}
        </>
      )}
    </>
  );
};

export default OfficialBrandProfilePublic;
