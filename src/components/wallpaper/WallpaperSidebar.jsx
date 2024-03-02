/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Drawer } from "@material-tailwind/react";
import WallpaperSidebarUi from "./WallpaperSidebarUi";

const WallpaperSidebar = ({ open, setOpen }) => {
  return (
    <>
      <div className="hidden lg:block">
        <WallpaperSidebarUi />
      </div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        size={361}
        className="bg-transparent p-0 m-0 w-full"
      >
        <WallpaperSidebarUi />
      </Drawer>
    </>
  );
};

export default WallpaperSidebar;
