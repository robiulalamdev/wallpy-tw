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

  const viewResizeImg = (path, width, height) => {
    if (path && width && height) {
      return `${BASE_URL}/wallpapers/resize?path=${encodeURIComponent(
        path
      )}&width=${width}&height=${height}`;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return { viewImg, formatFileSize, viewResizeImg };
};

export default useViewImage;
