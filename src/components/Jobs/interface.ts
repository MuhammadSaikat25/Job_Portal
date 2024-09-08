export interface JobsNavProps {
    jobDetails: {
      jobType: string;
      jobPosition: string;
      experience: string;
      salary: [number, number];
    };
    setJobDetails: React.Dispatch<React.SetStateAction<{
      jobType: string;
      jobPosition: string;
      experience: string;
      salary: [number, number];
    }>>;
  }