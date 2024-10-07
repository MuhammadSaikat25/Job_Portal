import { FC } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface JobDetails {
  jobType: string[];
  jobPosition: string[];
  experience: string[];
  salary: [number, number];
}

interface JobsNavProps {
  jobDetails: JobDetails;
  setJobDetails: React.Dispatch<React.SetStateAction<JobDetails>>;
}

const JobsNav: FC<JobsNavProps> = ({ jobDetails, setJobDetails }) => {
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    
    setJobDetails(prevState => {
      const updatedValues = checked
        ? [...(prevState[name as keyof JobDetails] as string[]), value] // Add value if checked
        : (prevState[name as keyof JobDetails] as string[]).filter((item: string) => item !== value); // Remove value if unchecked

      return {
        ...prevState,
        [name]: updatedValues
      };
    });
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setJobDetails(prevState => ({
      ...prevState,
      salary: newValue as [number, number]
    }));
  };

  // Add a check for jobDetails to ensure it is defined
  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Job Type */}
      <div>
        <h1 className="text-xl font-semibold text-gray-700">Job type</h1>
        <div className="flex flex-col gap-y-1">
          <label>
            <input
              type="checkbox"
              name="jobType"
              value="Internship"
              checked={jobDetails.jobType.includes("Internship")}
              onChange={handleCheckboxChange}
            />
            Internship
          </label>
          <label>
            <input
              type="checkbox"
              name="jobType"
              value="Full Time"
              checked={jobDetails.jobType.includes("Full Time")}
              onChange={handleCheckboxChange}
            />
            Full Time
          </label>
          <label>
            <input
              type="checkbox"
              name="jobType"
              value="Part Time"
              checked={jobDetails.jobType.includes("Part Time")}
              onChange={handleCheckboxChange}
            />
            Part Time
          </label>
        </div>
      </div>

      {/* Job Position */}
      <div className="my-10">
        <h1 className="text-xl font-semibold text-gray-700">Job Position</h1>
        <div>
          <label>
            <input
              type="checkbox"
              name="jobPosition"
              value="Remote"
              checked={jobDetails.jobPosition.includes("Remote")}
              onChange={handleCheckboxChange}
            />
            Remote
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="jobPosition"
              value="On-Site"
              checked={jobDetails.jobPosition.includes("On-Site")}
              onChange={handleCheckboxChange}
            />
            On-Site
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="jobPosition"
              value="Hybrid"
              checked={jobDetails.jobPosition.includes("Hybrid")}
              onChange={handleCheckboxChange}
            />
            Hybrid
          </label>
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <h1 className="text-xl font-semibold text-gray-700">
          Experience Level
        </h1>
        <div>
          <label>
            <input
              type="checkbox"
              name="experience"
              value="1-3"
              checked={jobDetails.experience.includes("1-3")}
              onChange={handleCheckboxChange}
            />
            1-3 Years
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="experience"
              value="3-7"
              checked={jobDetails.experience.includes("3-7")}
              onChange={handleCheckboxChange}
            />
            3-7 Years
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="experience"
              value="7-10"
              checked={jobDetails.experience.includes("7-10")}
              onChange={handleCheckboxChange}
            />
            7-10 Years
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="experience"
              value="10+"
              checked={jobDetails.experience.includes("10+")}
              onChange={handleCheckboxChange}
            />
            10+ Years
          </label>
        </div>
      </div>

      {/* Salary Range Slider */}
      <div>
        <Box sx={{ width: 130 }}>
          <Typography gutterBottom>Salary Range</Typography>
          <Slider
            value={jobDetails.salary}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            min={0}
            max={10000}
            step={100}
            getAriaValueText={(value) => `${value}`}
          />
          <p className="bg-blue-400 bg-opacity-40 px-3 text-blue-600 rounded-2xl w-fit">
            ${jobDetails.salary[0]} {"  "} ${jobDetails.salary[1]}
          </p>
        </Box>
      </div>
    </div>
  );
};

export default JobsNav;
