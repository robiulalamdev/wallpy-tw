import React from "react";
import {
  useApprovedProfileMutation,
  useGetAllUsersQuery,
} from "../../redux/features/users/usersApi";
import { Button } from "@material-tailwind/react";

const ProfileVerify = () => {
  const { data } = useGetAllUsersQuery();
  const [approvedProfile, { isLoading }] = useApprovedProfileMutation();

  const handleApproved = async (id) => {
    const options = {
      data: { status: "Approved" },
      id: id,
    };

    const result = await approvedProfile(options);
    console.log(result);
  };

  console.log(data);
  return (
    <div className="flex flex-wrap gap-6 my-16">
      {data?.data?.map((user, index) => (
        <>
          {user?.profile?.verification_status !== "None" && (
            <div
              className="w-[300px] h-fit bg-black border border-gray-800 rounded-md p-3"
              key={index}
            >
              <h1 className="text-white font-bakbak-one">
                {" "}
                <span className="text-gray-500">Name:</span> {user?.name}
              </h1>
              <h1 className="text-white font-bakbak-one">
                <span className="text-gray-500">Profile Type:</span>{" "}
                {user?.profile?.profile_type}
              </h1>
              <h1 className="text-white font-bakbak-one">
                <span className="text-gray-500">Brand or Artist Name:</span>{" "}
                {user?.profile?.name}
              </h1>
              {user?.profile?.verification_status === "Pending" && (
                <>
                  <Button
                    disabled={isLoading}
                    onClick={() => handleApproved(user?.profile?._id)}
                    className="w-fit px-4 py-2 mt-4 bg-green-600 !text-white font-normal rounded text-current normal-case"
                  >
                    <h1 className="!text-white font-bakbak-one">Approve Now</h1>
                  </Button>
                </>
              )}
              {user?.profile?.verification_status === "Decline" && (
                <>
                  <Button className="w-fit px-4 py-2 mt-4 bg-green-600 !text-white font-normal rounded text-current normal-case">
                    <h1 className="!text-white font-bakbak-one">Decline</h1>
                  </Button>
                </>
              )}
              {user?.profile?.verification_status === "Approved" && (
                <Button className="w-fit px-4 py-2 mt-4 bg-green-900 cursor-not-allowed !text-white font-normal rounded text-current normal-case">
                  <h1 className="!text-white font-bakbak-one">Approved</h1>
                </Button>
              )}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default ProfileVerify;
