import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { iOnline } from "../../utils/icons/dashboard-icons/dashicons";
import { sponsorClicks } from "../../utils/data/global";
import AdminChat from "../../components/dashboard-components/DashboardHome/AdminChat/AdminChat";
import MostFavorited from "../../components/dashboard-components/DashboardHome/MostFavorited";
import TopCategories from "../../components/dashboard-components/DashboardHome/TopCategories";
import MostDownloaded from "../../components/dashboard-components/DashboardHome/MostDownloaded";

const tabs = [
  "Today",
  "Yesterday",
  "This Week",
  "This Month",
  "This Year",
  "All Data",
];

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="flex justify-between gap-[17px] w-full h-full">
      <div className="flex-grow max-w-[1000px] min-w-[500px] w-full overflow-y-auto">
        <div className="flex items-center flex-wrap gap-[25px] w-full h-fit p-[10px] bg-dash-cm-bg rounded-[10px]">
          {tabs.map((tab, index) => (
            <Button
              key={index}
              className={`min-w-[72px] h-[32px] rounded-[8px] shadow-none hover:shadow-none outline-none py-0 px-[8px] text-center normal-case text-white font-lato text-[15px] font-semibold ${
                selectedTab === tab ? "bg-[#FF001F]" : "bg-transparent"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="h-fit flex justify-between flex-wrap 2xl:flex-nowrap gap-[18px] mt-[9px]">
          <div className="h-[102px] bg-dash-cm-bg rounded-[10px] flex flex-col justify-center items-center w-full gap-[14px]">
            <div className="flex items-center gap-[6px]">
              <h1 className="text-white font-lato font-medium text-[15px]">
                Online Now
              </h1>
              {iOnline}
            </div>
            <h1 className="text-white font-lato text-[20px] font-bold">2287</h1>
          </div>
          <div className="h-[102px] bg-dash-cm-bg rounded-[10px] flex flex-col justify-center items-center w-full gap-[14px]">
            <h1 className="text-white font-lato font-medium text-[15px]">
              Total Visitors
            </h1>
            <h1 className="text-white font-lato text-[20px] font-bold">7509</h1>
          </div>
          <div className="h-[102px] bg-dash-cm-bg rounded-[10px] flex flex-col justify-center items-center w-full gap-[14px]">
            <h1 className="text-white font-lato font-medium text-[15px]">
              Registered Accounts
            </h1>
            <h1 className="text-white font-lato text-[20px] font-bold">82</h1>
          </div>
        </div>

        <div className="h-[24vh] bg-dash-cm-bg rounded-[10px] flex flex-col justify-between items-center w-full gap-[14px] mt-[13px]">
          <h1 className="text-white font-lato font-medium text-[15px] pt-[19px] text-center">
            Wallpapers Downloaded
          </h1>
          <h1 className="text-white font-lato text-[30px] font-bold">5893</h1>
          <span></span>
        </div>

        <div className="h-[24vh] bg-dash-cm-bg rounded-[10px] flex flex-col justify-between items-center w-full gap-[14px] mt-[19px]">
          <h1 className="text-white font-lato font-medium text-[15px] pt-[19px] text-center">
            Wallpapers Uploaded
          </h1>
          <h1 className="text-white font-lato text-[30px] font-bold">1248</h1>
          <span></span>
        </div>

        <div className="min-h-[215px] h-[25.5vh] max-h-fit bg-dash-cm-bg rounded-[10px] w-full gap-[14px] mt-[19px] pb-[8px]">
          <h1 className="text-white font-lato font-medium text-[15px] pt-[19px] text-center">
            Sponsor Click-Through Links
          </h1>
          <div className="flex justify-center items-center flex-wrap 2xl:flex-nowrap gap-x-[35px] 2xl:gap-x-[60px] gap-y-[30px] mt-[40px]">
            {sponsorClicks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-[14px]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="size-[70px] rounded-[5px] object-cover"
                />
                <h1 className="text-white font-lato text-[15px] font-bold">
                  {item.count}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[425px] min-w-[300px] w-full overflow-y-auto">
        <MostFavorited />
        <TopCategories />
        <MostDownloaded />
        <div className="h-[133px] bg-dash-cm-bg rounded-[10px] flex flex-col justify-between items-center w-full gap-[14px] mt-[13px]">
          <h1 className="text-white font-lato font-medium text-[15px] pt-[19px] text-center">
            Claims & Reports
          </h1>
          <h1 className="text-white font-lato text-[30px] font-bold">5</h1>
          <span></span>
        </div>
      </div>
      <AdminChat />
    </div>
  );
};

export default Dashboard;
