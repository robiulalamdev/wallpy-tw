import img1 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md1.png";
import img2 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md2.png";
import img3 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md3.png";
import img4 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md4.png";
import img5 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md5.png";
import img6 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md6.png";
import img7 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md7.png";
import img8 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md8.png";
import img9 from "../../../assets/images/dashboard-images/dashboard-home/most-download/md9.png";

const MostDownloaded = () => {
  return (
    <div className="bg-dash-cm-bg rounded-[10px] w-full h-[277px] max-h-[277px] px-[19px] py-[21px] mt-[19px]">
      <h1 className="text-white font-lato text-[15px] font-medium text-center">
        Most Downloaded
      </h1>
      <div className="grid grid-cols-3 gap-x-[10px] gap-y-[12px] mt-[13px]">
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map(
          (item, index) => (
            <div key={index} className="">
              <img
                src={item}
                alt=""
                className="max-w-[122px] w-full h-[60px] object-cover rounded-[5px]"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MostDownloaded;
