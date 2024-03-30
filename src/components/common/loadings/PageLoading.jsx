import { SpinnerDiamond } from "spinners-react";

const PageLoading = () => {
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
};

export default PageLoading;
