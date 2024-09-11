import { FC } from "react";
import REducation from "./REducation";
import RProject from "./RProject";
import RExperience from "./RExperience";

type Props = {
  resume: any;
};
const ApplicantResume: FC<Props> = ({ resume }) => {
  const profile = resume?.candidateProfile;
  const education = resume?.education;
  const projects = resume?.project;
  const experience = resume?.works;

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-[16px] font-semibold">{profile.name}</h1>
          <p className="text-[16px] font-semibold">{profile.jobTitle}</p>
        </div>
        <div className="">
          <section className="flex items-center gap-x-1">
            <h1>{profile.city},</h1>
            <h1>{profile.country}</h1>
            <h1>ph:{profile.phone}</h1>
          </section>
          <section>
            <p className="text-[16px] font-semibold">{profile.email}</p>
          </section>
        </div>
      </div>
      <p className="w-full h-[1px] bg-gray-950 my-2"></p>
      <div className="flex flex-col gap-2">
        <p className="text-gray-800 font-semibold">Skill: </p>
        <div className="flex items-center gap-2 flex-wrap">
          {resume.skill.map((skill: string, i: number) => (
            <div key={i}>
              <h1 className="bg-blue-100 text-blue-500 p-1 w-fit rounded-lg">
                {" "}
                {skill}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <REducation educations={education} />
        <RProject projects={projects} />
        <RExperience work={experience} />
      </div>
    </div>
  );
};

export default ApplicantResume;
