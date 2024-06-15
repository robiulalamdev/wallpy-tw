import ErrorPage from "../../components/ErrorPage/ErrorPage";
import NotFoundHeader from "../../components/shared/headers/NotFoundHeader";

const NotFound = () => {
  return (
    <div className="w-full h-full">
      <NotFoundHeader />
      <ErrorPage />
    </div>
  );
};

export default NotFound;
