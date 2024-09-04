import React, { useState } from "react";
import useAxiosPublic from "../../../../utils/useAxiosPublic";
import { FadeLoader } from "react-spinners";
const ImageInput = () => {
  const [image, setImage] = useState<string | null>(null);
  const axiosPublic = useAxiosPublic();

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("image", file);

      try {
        const imageBB = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_PUBLIC_IMAGEBB
        }`;
        const postImageRes = await axiosPublic.post(imageBB, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (postImageRes) {
          setImage(postImageRes.data.data.url);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  console.log(image);
  return (
    <div className="w-full my-3 ">
      <input
        type="file"
        accept="image/*"
        id="file"
        className="hidden"
        onChange={handleFile}
      />
      <label htmlFor="file" className="border w-full px-4 rounded-full py-1">
        My Profile
        {image && (
          <div className="relative">
            <img
              className="w-full object-cover h-[180px] mt-2"
              src={image}
              alt="Uploaded"
            />
            <p className="absolute top-3 left-1 z-50">
              <FadeLoader />
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageInput;
