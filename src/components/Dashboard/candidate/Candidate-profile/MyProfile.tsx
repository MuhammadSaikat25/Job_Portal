import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../../utils/useAxiosPublic";
import { useGetCandidateProfileQuery } from "../../../../redux/feature/candidate/candidateProfileApi";

type Props = {
  candidateImage: string;
  setCandidateImage: (image: string) => void;
};
const MyProfile = ({ setCandidateImage }: Props) => {
  const axiosPublic = useAxiosPublic();
  const { data } = useGetCandidateProfileQuery(undefined);
  const [image, setImage] = useState<string | null>(null);

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
          setCandidateImage(postImageRes.data.data.url);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  useEffect(() => {
    setImage(data?.data?.image);
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
      <label htmlFor="file" className="border cursor-pointer w-full px-4 rounded-full py-1">
        Upload Profile
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

export default MyProfile;
