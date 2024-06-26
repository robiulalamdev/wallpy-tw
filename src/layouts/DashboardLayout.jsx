import { Outlet } from "react-router-dom";
import DashSidebar from "../components/dashboard-components/DashboradSharedComponents/DashSidebar";

const DashboardLayout = () => {
  return (
    <div className="bg-dash-bg !p-[8px_16px_19px_7px] h-screen max-h-screen w-full flex justify-between gap-x-[18px]">
      <DashSidebar />
      <div className="flex-grow max-w-[1594px] mx-auto w-full h-full overflow-y-auto overflow-x-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
