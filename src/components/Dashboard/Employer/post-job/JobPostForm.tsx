import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";

const JobPostForm = () => {
  const [responsibilities, setResponsibilities] = useState([""]);
  const [skills, setSkills] = useState([""]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [deadline, setDeadline] = useState("");
  const [jobType, setJobType] = useState("");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const handleResponsibilityChange = (index: number, value: string) => {
    const newResponsibilities = [...responsibilities];
    newResponsibilities[index] = value;
    setResponsibilities(newResponsibilities);
  };

  const handleRemoveResponsibility = (index: number) => {
    if (responsibilities?.length === 1) return;
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
    if (skills?.length === 1) return;
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    };

    // You can process this data (send to API, log it, etc.)
    console.log("Job Post Data:", jobPostData);
    // Reset form if needed
  };

  return (
    <div className="rounded-md py-1">
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
              className="flex items-center "
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
              <label htmlFor="Experience">Experience</label>
              <select
                className="w-full bg-stone-300 p-2 rounded-sm"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="">1-3 Years</option>
                <option value="">3-7 Years</option>
                <option value="">7-10 Years</option>
                <option value="">10+ Years</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="Experience">Gender</label>
              <select
                className="bg-slate-300 p-2 rounded-sm"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>
          {/* Application Deadline & Job Type */}
          <div className="flex items-center justify-between mt-2 w-full gap-x-2">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="">Application Deadline</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="bg-slate-300 p-2 rounded-sm"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="Experience">Job Type</label>
              <select
                className="bg-slate-300 p-2 rounded-sm"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">Full Time</option>
                <option value="">Part Time</option>
                <option value="">Internship</option>
              </select>
            </div>
          </div>
          {/* Country & Job Position */}
          <div className="flex items-center justify-between mt-2 w-full gap-x-2">
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="">Country</label>
              <input
                type="text"
                className="bg-slate-300 p-2 rounded-sm"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="Experience">Job Position</label>
              <select
                className="bg-slate-300 p-2 rounded-sm"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="">Remote</option>
                <option value="">On location</option>
              </select>
            </div>
          </div>
          {/* Salary */}
          <div className="flex flex-col gap-y-2 w-full mt-4">
            <label htmlFor="Salary">Salary</label>
            <input
              type="text"
              className="w-full bg-slate-300 p-2 rounded-sm"
              placeholder="Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <div className="flex items-end justify-end mt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
