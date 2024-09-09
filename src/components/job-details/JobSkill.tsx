const JobSkill = ({ job }: { job: any }) => {
  return (
    <div className="py-10">
      <h1 className="text-gray-900 text-2xl">Skill & Experience</h1>
      {job?.skills.map((skill: string, i: number) => (
        <div key={i} className="flex items-center gap-x-2 py-4">
          <h1 className="w-[5px] h-[5px] bg-black rounded"></h1>
          <p className="text-gray-500">{skill}</p>
        </div>
      ))}
    </div>
  );
};

export default JobSkill;
