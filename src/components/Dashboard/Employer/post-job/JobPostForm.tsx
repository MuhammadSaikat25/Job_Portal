import { useEffect, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { usePostJobMutation } from "../../../../redux/feature/employer/jobApi";
import { useGetMyCompanyQuery } from "../../../../redux/feature/employer/companyApi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const JobPostForm = () => {
  const [companyId, setCompanyId] = useState("");
  const [postJob] = usePostJobMutation();
  const { data } = useGetMyCompanyQuery(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    setCompanyId(data?.data?._id);
  }, [data]);
  console.log(companyId);
  const [responsibilities, setResponsibilities] = useState<string[]>([""]);
  const [skills, setSkills] = useState<string[]>([""]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("1-3");
  const [gender, setGender] = useState("");
  const [deadline, setDeadline] = useState("");
  const [jobType, setJobType] = useState("");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState<number>();

  const handleAddResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const handleResponsibilityChange = (index: number, value: string) => {
    const newResponsibilities = [...responsibilities];
    newResponsibilities[index] = value;
    setResponsibilities(newResponsibilities);
  };

  const handleRemoveResponsibility = (index: number) => {
    if (responsibilities.length === 1) return;
    const newResponsibilities = responsibilities.filter((_, i) => i !== index);
    setResponsibilities(newResponsibilities);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleRemoveSkill = (index: number) => {
    if (skills.length === 1) return;
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const jobPostData = {
      title,
      description,
      responsibilities,
      skills,
      experience,
      gender,
      deadline,
      jobType,
      country,
      position,
      salary,
      company: companyId,
    };

    const res = await postJob(jobPostData);

    if (res.error) {
      console.log(res.error);
      toast.error("Something went wrong");
    }

    if (res.data.success === true) {
      toast.success("job post successful");
    }
  };

  return (
    <div className="rounded-md">
      <Toaster />
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-sm shadow shadow-blue-300">
          {/* Title */}
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="w-full border p-2 rounded-sm bg-[#CBD5E1]"
              placeholder="Title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          {/* Job Description */}
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label htmlFor="description">Job Description</label>
            <textarea
              className="w-full border p-2 rounded-sm bg-[#CBD5E1]"
              placeholder="Job Description..."
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          {/* Key Responsibilities */}
          <div className="flex flex-col gap-y-1 relative">
            <label htmlFor="responsibilities">Key Responsibilities</label>
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="relative flex items-center">
                <input
                  type="text"
                  className="w-full border p-2 rounded-sm bg-[#CBD5E1] mb-2"
                  required
                  value={responsibility}
                  onChange={(e) =>
                    handleResponsibilityChange(index, e.target.value)
                  }
                  placeholder={`Responsibility ${index + 1}`}
                />
                {index !== 0 && (
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-red-500"
                    onClick={() => handleRemoveResponsibility(index)}
                  >
                    <IoMdClose />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="flex items-center"
              onClick={handleAddResponsibility}
            >
              <IoMdAdd />
              <span>Add Responsibility</span>
            </button>
          </div>
          {/* Skills & Experience */}
          <div className="flex flex-col gap-y-1 relative mt-4">
            <label htmlFor="skills">Skills & Experience</label>
            {skills.map((skill, index) => (
              <div key={index} className="relative flex items-center">
                <input
                  type="text"
                  className="w-full border p-2 rounded-sm bg-[#CBD5E1] mb-2"
                  required
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder={`Skill ${index + 1}`}
                />
                {index !== 0 && (
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-red-500"
                    onClick={() => handleRemoveSkill(index)}
                  >
                    <IoMdClose />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="flex items-center"
              onClick={handleAddSkill}
            >
              <IoMdAdd />
              <span>Add Skill</span>
            </button>
          </div>
          {/* Experience & Gender */}
          <div className="flex items-center justify-between mt-2 w-full gap-x-2">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="experience">Experience</label>
              <select
                className="w-full bg-stone-300 p-2 rounded-sm"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                id="experience"
              >
                <option value="">1-3 Years</option>
                <option value="3-7">3-7 Years</option>
                <option value="7-10">7-10 Years</option>
                <option value="10+">10+ Years</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="gender">Gender</label>
              <select
                className="bg-slate-300 p-2 rounded-sm"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                id="gender"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </div>
          {/* Application Deadline & Job Type */}
          <div className="flex items-center justify-between mt-2 w-full gap-x-2">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="deadline">Application Deadline</label>
              <input
                type="date"
                id="deadline"
                min={new Date().toISOString().split("T")[0]}
                className="bg-slate-300 p-2 rounded-sm"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="jobType">Job Type</label>
              <select
                className="bg-slate-300 p-2 rounded-sm"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                id="jobType"
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
          {/* Country & Job Position */}
          <div className="flex items-center justify-between mt-2 w-full gap-x-2">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="country">Country</label>
              <select
                className="bg-slate-300 p-2 rounded-sm"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                id="country"
                required
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="position">Job Position</label>
              <select
                name=""
                id=""
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                className="bg-slate-300 p-2 rounded-sm"
              >
                <option value="Remote">Remote</option>
                <option value="On Side">On Side</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          {/* Salary */}
          <div className="flex flex-col items-start gap-y-2 mt-2 w-full">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              id="salary"
              className="bg-slate-300 p-2 rounded-sm w-full"
              placeholder="Salary"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              required
            />
          </div>
          {/* Submit Button */}
          {companyId ? (
            <button
              type="submit"
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
            >
              Post Job
            </button>
          ) : (
            <div
              onClick={() => {
                navigate("/employ-dashboard/company-profile");
              }}
              className="mt-10 w-full py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 text-center"
            >
              Create company to post Job
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
