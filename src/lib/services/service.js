import pica from "pica";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

export const getImageDimensions = (image) => {
  return new Promise((resolve, reject) => {
    let imageUrl = "";
    if (image) {
      if (image instanceof File && image.type.startsWith("image/")) {
        imageUrl = URL.createObjectURL(
          new Blob([image], { type: "application/octet-stream" })
        );
      } else {
        if (image?.startsWith("http")) {
          imageUrl = image;
        } else {
          imageUrl = `${BASE_URL}/uploads/${image}`;
        }
      }
    } else {
      reject(new Error("Invalid image input"));
    }

    fetch(imageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        return response.blob();
      })
      .then((blob) => {
        const size = blob.size;
        const img = new Image();
        img.onload = () => {
          resolve({
            size: size,
            width: img.width,
            height: img.height,
          });
        };
        img.onerror = () => {
          reject(new Error("Failed to load image"));
        };
        img.src = imageUrl;
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// download image with width and height
export const downloadImageWithWH = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const blob = await response.blob();
    const urlBlob = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = urlBlob;

    // Extract the file name from the URL
    const urlPath = new URL(imageUrl).pathname;
    const fileName = urlPath.substring(urlPath.lastIndexOf("/") + 1);

    link.download = fileName; // Use the file name extracted from the URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    window.URL.revokeObjectURL(urlBlob);
    return { success: true };
  } catch (error) {
    toast.error("Error downloading");
    return { success: false, error: error?.message };
  }
};

// export const downloadImageWithWH = async (imageUrl, width, height) => {
//   try {
//     const img = await loadImage(imageUrl);

//     // Create an offscreen canvas for the source image
//     const srcCanvas = document.createElement("canvas");
//     srcCanvas.width = img.width;
//     srcCanvas.height = img.height;
//     const srcCtx = srcCanvas.getContext("2d");
//     srcCtx.drawImage(img, 0, 0);

//     // Create a destination canvas for the resized image
//     const destCanvas = document.createElement("canvas");
//     destCanvas.width = width;
//     destCanvas.height = height;

//     const picaInstance = pica();
//     await picaInstance.resize(srcCanvas, destCanvas, {
//       quality: 3, // Highest quality setting
//       alpha: true,
//     });

//     destCanvas.toBlob((blob) => {
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "downloaded-image.png";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }, "image/png");
//     return { success: true };
//   } catch (error) {
//     toast.error("Error downloading");
//     return { success: false, error: error?.message };
//   }
// };

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => resolve(img);
    img.onerror = (error) => reject(error);
    img.src = src;
  });
};

export const makeQuery = async (
  name,
  value,
  queryObject,
  isDimensions = false,
  isDelete = false
) => {
  // Create a copy of the queryObject to avoid mutating the original object
  const updatedQueryObject = { ...queryObject };
  // Conditionally update or delete the specified query parameter
  if (isDelete) {
    if (isDimensions) {
      delete updatedQueryObject["width"];
      delete updatedQueryObject["height"];
    } else {
      delete updatedQueryObject[name];
    }
  } else {
    updatedQueryObject[name] = value;
  }
  // console.log(updatedQueryObject);

  // Build the query string from the updated query object, excluding empty values
  const newQuery = Object.keys(updatedQueryObject)
    .filter(
      (key) =>
        updatedQueryObject[key] !== undefined && updatedQueryObject[key] !== ""
    )
    .map((key) => `${key}=${updatedQueryObject[key]}`)
    .join("&");

  return newQuery;
};

export function validateImageSize(imageFile, maxSizeMB) {
  const MAX_FILE_SIZE = maxSizeMB * 1024 * 1024;

  // Check if the file size exceeds the maximum limit
  if (imageFile.size > MAX_FILE_SIZE) {
    return {
      success: false,
      message: "File size exceeds " + maxSizeMB + "MB",
    };
  } else {
    return {
      success: true,
      message: "File size is within the limit",
    };
  }
}
