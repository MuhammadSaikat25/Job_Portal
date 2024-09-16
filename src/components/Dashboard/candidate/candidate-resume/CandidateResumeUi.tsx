import { useState } from "react";
import Education from "./Education/Education";
import Projects from "./project/Projects";
import WorkExperience from "./WorkExperience/WorkExperience";
import { useGetCandidateProfileQuery } from "../../../../redux/feature/candidate/candidateProfileApi";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import {
  useCreateResumeMutation,
  useGetMyResumeQuery,
} from "../../../../redux/feature/candidate/resumeApi";
import { toast, Toaster } from "react-hot-toast";
import Skill from "./skill/Skill";
import { useNavigate } from "react-router-dom";

const CandidateResumeUi = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { data } = useGetCandidateProfileQuery(undefined);
  const { data: MyResume } = useGetMyResumeQuery(undefined);
  const navigate = useNavigate();

  const [createResume] = useCreateResumeMutation();
  const [description, setDescription] = useState("");
  const [education, setEducation] = useState<any>([]);
  const [works, setWorks] = useState<any>([]);
  const [project, setProject] = useState<any>([]);
  const [skill, setSkill] = useState<any>(MyResume?.data?.skill || []);

  const resume = {
    email: user?.email,
    candidateProfile: data?.data?._id,
    education: [...education],
    works: [...works],
    project: [...project],
    description,
    skill,
  };

  const handelResume = async () => {
    if (!data?.data?._id) {
      toast.error("Please create your profile");
      return setTimeout(() => {
        navigate("/candidate/dashboard/myProfile");
      }, 700);
    }
    if (
      education?.length === 0 &&
      works?.length === 0 &&
      project?.length === 0
    ) {
      return toast.error("Please add your education experience projects");
    }

    const res = await createResume(resume);
    if (res?.data?.success) {
      toast.success("Resume create successful");
    }
  };

  return (
    <div className="bg-[#e7e9ee] lg:p-10 h-full pt-20 px-1">
      <Toaster />
      <div className="bg-white p-6 rounded-md shadow shadow-blue-300">
        <textarea
          name=""
          id=""
          defaultValue={MyResume?.data?.description || ""}
          className="bg-[#F0F5F7] w-full p-2 rounded-md"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <Education setEducation={setEducation} education={education} />
        <WorkExperience works={works} setWorks={setWorks} />
        <Projects setProject={setProject} project={project} />
        <h1>Skill</h1>
        <Skill
          setSkill={setSkill}
          skill={skill}
          mySkill={MyResume?.data?.skill}
        />
        <button
          onClick={handelResume}
          className="bg-blue-950 w-full p-1 rounded-sm text-white mt-3"
        >
          Create Resume
        </button>
      </div>
    </div>
  );
};

export default CandidateResumeUi;
