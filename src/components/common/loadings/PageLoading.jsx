import spinner from "../../../assets/icons/global/loading/spinner.gif";

const PageLoading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <img src={spinner} alt="" className="object-contain" />
    </div>
  );
};

export default PageLoading;
