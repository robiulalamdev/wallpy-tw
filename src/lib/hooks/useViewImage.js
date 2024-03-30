import { BASE_URL } from "../config";

const useViewImage = () => {
  const viewImg = (img) => {
    if (img) {
      if (img instanceof File && img.type.startsWith("image/")) {
        return URL.createObjectURL(
          new Blob([img], { type: "application/octet-stream" })
        );
      } else {
        if (img?.startsWith("http")) {
          return img;
        } else {
          return `${BASE_URL}/uploads/${img}`;
        }
      }
    }
  };
  return { viewImg };
};

export default useViewImage;
