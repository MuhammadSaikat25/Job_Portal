import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../../utils/useAxiosPublic";
import { FadeLoader } from "react-spinners";
import { useGetMyCompanyQuery } from "../../../../redux/feature/employer/companyApi";
type Props = {
  companyImage: string;
  setCompanyImage: (image: string) => void;
};

const ImageInput = ({ setCompanyImage }: Props) => {
  const [image, setImage] = useState<string | null>(null);
  const axiosPublic = useAxiosPublic();
  const { data } = useGetMyCompanyQuery(undefined);

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
          setCompanyImage(postImageRes.data.data.url);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  useEffect(() => {
    if (data?.data) {
      setImage(data?.data?.image);
    }
  }, [data]);
  return (
    <div className="w-full my-3 ">
      <input
        type="file"
        accept="image/*"
        id="file"
        className="hidden"
        onChange={handleFile}
      />
      <label
        htmlFor="file"
        className=" w-full cursor-pointer px-4 rounded-full bg-gray-600 text-white py-1"
      >
        Profile
      </label>
      {image && (
        <div className="relative">
          <img
            className="w-full object-cover rounded-md h-[180px] mt-2"
            src={image}
            alt="Uploaded"
          />
        </div>
      )}
    </div>
  );
};

export default ImageInput;
