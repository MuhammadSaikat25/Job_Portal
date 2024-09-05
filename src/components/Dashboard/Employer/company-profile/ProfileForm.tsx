import { useState } from "react";
import ImageInput from "./ImageInput";
import MultipleSelect from "./MultipleSelect";
import { useCreateCompanyMutation } from "../../../../redux/feature/employer/companyApi";
import toast, { Toaster } from "react-hot-toast";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";

const ProfileForm = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [createCompany, { isLoading }] = useCreateCompanyMutation();
  const [aboutCompany, setAboutCompany] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    companyName: "",
    email: user?.email,
    phone: "",
    website: "",
    teamSize: "50-100",
    aboutCompany: "",
    CompanyDescription: "",
    country: "",
    city: "",
    address: "",
  });
  const [companyImage, setCompanyImage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const companyData = {
      ...formData,
      image: companyImage,
      aboutCompany: [...aboutCompany],
    };
    const res = await createCompany(companyData);

    if (res.error) {
      const error = res.error as any;
      if (error.data && error.data.statusCode !== 401) {
        const errPath = error.data.errorSources;
        toast.error(errPath?.map((err: any) => err.message));
      }
      if (error.data.statusCode === 401) {
        toast.error(error.data.message);
      }
    }
    if (!res.error) {
      toast.success("Company create successful");
      setFormData({
        companyName: "",
        email: "",
        phone: "",
        website: "",
        teamSize: "50-100",
        aboutCompany: "",
        CompanyDescription: "",
        country: "",
        city: "",
        address: "",
      });
      setAboutCompany([""]);
      setCompanyImage("");
    }
  };

  return (
    <div className="rounded-md py-10 ">
      <Toaster />
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-sm shadow shadow-blue-300">
          <ImageInput
            setCompanyImage={setCompanyImage}
            companyImage={companyImage}
          />

          {/* Company name and email */}
          <div className="md:flex gap-x-4 items-center">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="companyName">Company name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={user!.email}
                placeholder="Email"
                readOnly
                className="w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
          </div>

          {/* Phone and website */}
          <div className="md:flex gap-x-4 items-center">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Website link"
                className="w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
          </div>

          {/* Team size and company description */}
          <div className="md:flex gap-x-4 items-center">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="teamSize">Team Size</label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="w-full p-1 bg-[#CBD5E1] overflow-auto rounded-sm"
              >
                <option value="50-100">50-100</option>
                <option value="150-250">150-250</option>
                <option value="300-550">300-550</option>
                <option value="1000+">1000+</option>
              </select>
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="aboutCompany">What does your company do?</label>
              <MultipleSelect
                setAboutCompany={setAboutCompany}
                aboutCompany={aboutCompany}
              />
            </div>
          </div>

          {/* About the company */}
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label htmlFor="aboutCompanyText">About Company</label>
            <textarea
              name="CompanyDescription"
              value={formData.CompanyDescription}
              onChange={handleInputChange}
              className="w-full p-1 rounded-sm bg-[#CBD5E1]"
              placeholder="About Company ...."
            ></textarea>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-6 w-full bg-white p-6 rounded-sm shadow shadow-blue-300">
          <h1>Contact Information</h1>
          <div className="md:flex items-center gap-x-4 mt-4">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Country..."
                className="w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City..."
                className="w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="address">Complete Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full bg-[#CBD5E1] p-1 rounded-sm"
              placeholder="Address..."
            />
          </div>
        </div>

        {isLoading ? (
          <p>loading ...</p>
        ) : (
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-700 w-full text-white rounded"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
