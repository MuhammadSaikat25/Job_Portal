import { useState, useEffect } from "react";
import MyProfile from "./MyProfile";
import {
  useCreateCandidateProfileMutation,
  useGetCandidateProfileQuery,
} from "../../../../redux/feature/candidate/candidateProfileApi";
import { toast, Toaster } from "react-hot-toast";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";

const ProfileForm = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [createCandidateProfile] = useCreateCandidateProfileMutation();
  const [candidateImage, setCandidateImage] = useState("");
  const { data } = useGetCandidateProfileQuery(undefined);

  const [formData, setFormData] = useState({
    name: "",
    image: candidateImage,
    jobTitle: "",
    phone: "",
    email: user?.email || "",
    currentSalary: "",
    expectedSalary: "",
    experience: "",
    age: "",
    country: "",
    city: "",
    address: "",
  });


  useEffect(() => {
    if (data?.data) {
      setFormData({
        name: data.data.name || "",
        image: candidateImage || data.data.image ,
        jobTitle: data.data.jobTitle || "",
        phone: data.data.phone || "",
        email: user?.email || data.data.email || "",
        currentSalary: data.data.currentSalary || "",
        expectedSalary: data.data.expectedSalary || "",
        experience: data.data.experience || "",
        age: data.data.age || "",
        country: data.data.country || "",
        city: data.data.city || "",
        address: data.data.address || "",
      });
    }
  }, [data, candidateImage, user?.email]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await createCandidateProfile({
      ...formData,
      image: candidateImage,
    });
    console.log({ ...formData, image: candidateImage });
    if (res.data) {
      toast.success("Candidate profile created successfully");
    } else if (res.error) {
      toast.error("Something went wrong");
    }
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Toaster />
      <MyProfile
        candidateImage={candidateImage}
        setCandidateImage={setCandidateImage}
      />
      <form
        className="w-full flex flex-col gap-y-6 bg-white p-6 rounded-sm"
        onSubmit={handleSubmit}
      >
        {/* Name and Job Title */}
        <div className="flex items-center gap-x-2">
          <input
            name="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="bg-stone-200 border border-gray-500 p-2 rounded-sm lg:w-[50%]"
          />

          <input
            name="jobTitle"
            placeholder="Job Title"
            type="text"
            value={formData.jobTitle}
            onChange={handleChange}
            className="bg-stone-200 border border-gray-500 p-2 rounded-sm lg:w-[50%]"
          />
        </div>

        {/* Phone and Email */}
        <div className="flex items-center gap-x-2">
          <input
            name="phone"
            placeholder="Phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-stone-200 border border-gray-500 p-2 rounded-sm lg:w-[50%]"
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            className="bg-stone-200 border border-gray-500 p-2 rounded-sm lg:w-[50%]"
            readOnly
          />
        </div>

        {/* Current and Expected Salary */}
        <div className="flex items-center gap-x-2">
          <select
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleChange}
            className="bg-stone-200 border border-gray-500 p-2 rounded-sm lg:w-[50%]"
          >
            <option value="">Current Salary($)</option>
            <option value="40-70">40-70K</option>
            <option value="60-90">60-90K</option>
            <option value="70-100">70-100K</option>
            <option value="100-150">100-150K</option>
          </select>

          <select
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
            className="bg-stone-200 border border-gray-500 p-2 rounded-sm lg:w-[50%]"
          >
            <option value="">Expected Salary($)</option>
            <option value="40-70">40-70K</option>
            <option value="60-90">60-90K</option>
            <option value="70-100">70-100K</option>
            <option value="100-150">100-150K</option>
            <option value="120-300">120-300K</option>
          </select>
        </div>

        {/* Experience and Age */}
        <div className="flex items-center gap-x-3">
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="bg-stone-200 border border-gray-500 p-2 rounded-sm w-full"
          >
            <option value="">Experience</option>
            <option value="1-3">1-3</option>
            <option value="3-5">3-5</option>
            <option value="6-8">6-8</option>
            <option value="10+">10+</option>
          </select>

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="bg-stone-200 border border-gray-500 p-2 rounded-sm w-full"
          />
        </div>

        {/* Contact Information */}
        <div className="w-full bg-white p-6 rounded-sm shadow shadow-blue-300">
          <h1 className="font-semibold text-2xl">Contact Information</h1>
          <div className="md:flex items-center gap-x-4 mt-4">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country..."
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 rounded-sm bg-[#CBD5E1]"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                placeholder="City..."
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 rounded-sm bg-[#CBD5E1]"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="address">Complete Address</label>
            <input
              type="text"
              name="address"
              placeholder="Complete Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 rounded-sm bg-[#CBD5E1]"
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-600 w-full p-2 text-white text-lg rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
