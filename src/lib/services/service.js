import pica from "pica";
import { BASE_URL } from "../config";

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
export const downloadImageWithWH = async (imageUrl, width, height) => {
  try {
    const img = await loadImage(imageUrl);

    // Create an offscreen canvas for the source image
    const srcCanvas = document.createElement("canvas");
    srcCanvas.width = img.width;
    srcCanvas.height = img.height;
    const srcCtx = srcCanvas.getContext("2d");
    srcCtx.drawImage(img, 0, 0);

    // Create a destination canvas for the resized image
    const destCanvas = document.createElement("canvas");
    destCanvas.width = width;
    destCanvas.height = height;

    const picaInstance = pica();
    await picaInstance.resize(srcCanvas, destCanvas, {
      quality: 3, // Highest quality setting
      alpha: true,
    });

    destCanvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "downloaded-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, "image/png");
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => resolve(img);
    img.onerror = (error) => reject(error);
    img.src = src;
  });
};
