import img1 from "../../../assets/images/dashboard-images/dashboard-home/mostf1.png";
import img2 from "../../../assets/images/dashboard-images/dashboard-home/mostf2.png";
import img3 from "../../../assets/images/dashboard-images/dashboard-home/mostf3.png";

const MostFavorited = () => {
  return (
    <div className="bg-dash-cm-bg rounded-[10px] w-full h-[163px] px-[19px]">
      <h1 className="text-white font-lato text-[15px] font-medium text-center pt-[15px]">
        Most Favorited
      </h1>
      <div className="flex justify-center items-center gap-[10px] mt-[21px]">
        {[img1, img2, img3].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[6px]"
          >
            <img
              src={item}
              alt=""
              className="max-w-[122px] w-full h-[60px] object-cover rounded-[5px]"
            />
            <h1 className="text-white font-lato text-[15px] font-medium">
              {index + 1}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostFavorited;
