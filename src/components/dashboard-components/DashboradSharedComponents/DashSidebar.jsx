import { useSelector } from "react-redux";
import DashSidebarUi from "./DashSidebarUi";
import DashboardIconSidebarUi from "./DashboardIconSidebarUi";

const DashSidebar = () => {
  const { isOpen } = useSelector((state) => state.global);

  return <>{isOpen ? <DashSidebarUi /> : <DashboardIconSidebarUi />}</>;
};

export default DashSidebar;
