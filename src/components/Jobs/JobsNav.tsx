import { FC } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


interface JobDetails {
  jobType: string;
  jobPosition: string;
  experience: string;
  salary: [number, number];
}


interface JobsNavProps {
  jobDetails: JobDetails;
  setJobDetails: React.Dispatch<React.SetStateAction<JobDetails>>;
}

const JobsNav: FC<JobsNavProps> = ({ jobDetails, setJobDetails }) => {
  
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setJobDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    event
    setJobDetails(prevState => ({
      ...prevState,
      salary: newValue as [number, number]
    }));
  };

  return (
    <div>
      <div className="">
        <h1 className="text-xl font-semibold text-gray-700">Job type</h1>
        <div className="flex flex-col gap-y-1">
          <label>
            <input
              type="radio"
              name="jobType"
              value="Internship"
              checked={jobDetails.jobType === "Internship"}
              onChange={handleChange}
            />
            Internship
          </label>
          <label>
            <input
              type="radio"
              name="jobType"
              value="Full Time"
              checked={jobDetails.jobType === "Full Time"}
              onChange={handleChange}
            />
            Full Time
          </label>
          <label>
            <input
              type="radio"
              name="jobType"
              value="Part Time"
              checked={jobDetails.jobType === "Part Time"}
              onChange={handleChange}
            />
            Part Time
          </label>
        </div>
      </div>
      {/* ----------------------- Job Position -------------------*/}
      <div className="my-10">
        <h1 className="text-xl font-semibold text-gray-700">Job Position</h1>
        <div>
          <label>
            <input
              type="radio"
              name="jobPosition"
              value="Remote"
              checked={jobDetails.jobPosition === "Remote"}
              onChange={handleChange}
            />
            Remote
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="jobPosition"
              value="On-Site"
              checked={jobDetails.jobPosition === "On-Site"}
              onChange={handleChange}
            />
            On-Site
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="jobPosition"
              value="Hybrid"
              checked={jobDetails.jobPosition === "Hybrid"}
              onChange={handleChange}
            />
            Hybrid
          </label>
        </div>
      </div>
      {/* --------------------------- Experience Level-----------------*/}
      <div className="">
        <h1 className="text-xl font-semibold text-gray-700">
          Experience Level
        </h1>
        <div>
          <label>
            <input
              type="radio"
              name="experience"
              value="1-3"
              checked={jobDetails.experience === "1-3"}
              onChange={handleChange}
            />
            1-3 Years
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="experience"
              value="3-7"
              checked={jobDetails.experience === "3-7"}
              onChange={handleChange}
            />
            3-7 Years
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="experience"
              value="7-10"
              checked={jobDetails.experience === "7-10"}
              onChange={handleChange}
            />
            7-10 Years
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="experience"
              value="10+"
              checked={jobDetails.experience === "10+"}
              onChange={handleChange}
            />
            10+ Years
          </label>
        </div>
      </div>
      {/* ------------------ Salary Range Slider -------------- */}
      <div className="">
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
