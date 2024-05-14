import spinner from "../../../assets/icons/global/loading/spinner.svg";

const PageLoading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <img src={spinner} alt="" className="w-[100px]" />
    </div>
  );
};

export default PageLoading;
