/* eslint-disable react/prop-types */

import DraftPublishSidebarUi from "./DraftPublishSidebarUi";
import { Drawer } from "@material-tailwind/react";

const DraftPublishSidebar = ({
  open,
  setOpen,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <>
      <div className="hidden lg:block">
        <DraftPublishSidebarUi
          setOpen={setOpen}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        size={361}
        className="p-0 bg-transparent rounded-[10px]"
      >
        <DraftPublishSidebarUi
          setOpen={setOpen}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </Drawer>
    </>
  );
};

export default DraftPublishSidebar;
