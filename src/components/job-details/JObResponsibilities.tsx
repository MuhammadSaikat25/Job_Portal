const JObResponsibilities = ({ job }: { job: any }) => {

  return (
    <div>
      <h1 className="text-gray-900 text-2xl">Key Responsibilities</h1>
      {job?.responsibilities.map((res: string, i: number) => (
        <div key={i} className="flex items-center gap-x-1 py-4">
          <h1 className="w-[5px] h-[5px] bg-black rounded"></h1>
          <p className="text-gray-500">{res}</p>
        </div>
      ))}
    </div>
  );
};

export default JObResponsibilities;
