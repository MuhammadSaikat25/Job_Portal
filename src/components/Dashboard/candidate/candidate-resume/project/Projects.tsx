import "./project.css";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { useGetMyResumeQuery } from "../../../../../redux/feature/candidate/resumeApi";

type Props = {
  project: any[];
  setProject: (project: any) => void;
};
const Projects = ({ setProject }: Props) => {
  const [projects, setProjects] = useState<any>([]);
  const { data: myResume } = useGetMyResumeQuery(undefined);

  const [projectName, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [liveLink, setInstitution] = useState("");
  const [description, setDescription] = useState("");

  const [addModal, setAddModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddEducation = (e: any) => {
    e.preventDefault();
    if (editId) {
      const updatedProjects = projects.map((pro: any) => {
        if (pro._id === editId) {
          console.log("Matching project found:", pro);
          return { ...pro, projectName, liveLink, year, description };
        }
        return pro;
      });

      console.log("Updated Projects:", updatedProjects);
      setProjects(updatedProjects);
      setProject(updatedProjects);
      setEditId(null);
    } else {
      const newEducation = {
        projectName,
        liveLink,
        year,
        description,
      };
      setProjects([...projects, newEducation]);
      setProject([...projects, newEducation]);
    }
    setAddModal(false);
    resetForm();
  };

  const resetForm = () => {
    setDegree("");
    setYear("");
    setInstitution("");
    setDescription("");
  };

  const handleEdit = (project: any) => {
    setDegree(project.projectName);
    setYear(project.year);
    setInstitution(project.liveLink);
    setDescription(project.description);
    setEditId(project._id);
    setAddModal(true);
  };

  const handleDelete = (id: any) => {
    setAddModal(false);
    const filteredEducations = projects.filter((pro: any) => pro._id !== id);
    setProjects(filteredEducations);
    setProject(filteredEducations);
    setProject(filteredEducations);
  };
  useEffect(() => {
    setProjects(myResume?.data?.project || []);
    setProject(myResume?.data?.project || []);
  }, [myResume]);
  
  return (
    <div className="w-full ">
      <h1>Projects</h1>
      <div className="flex flex-col md:flex-row items-start justify-between mt-4">
        {projects?.length ? (
          <div className="education-section flex">
            {projects?.map((pro: any, i: number) => (
              <div className="education-item" key={i}>
                <div className="badge-column">
                  <div className="badge ">{pro.liveLink?.slice(0)[0]}</div>
                </div>
                <div className="education-details">
                  <div className="flex items-center gap-x-5">
                    <h3 className="font-semibold text-[#254336]">
                      {pro.projectName}
                    </h3>
                    <p className="bg-[#EFF4FC] hidden md:block px-6 rounded-full text-[#197DDE]">
                      {pro.year}
                    </p>
                    <div className="flex items-center gap-x-2">
                      <MdOutlineEdit
                        className="cursor-pointer"
                        onClick={() => handleEdit(pro)}
                      />
                      <MdOutlineDeleteForever
                        className="cursor-pointer"
                        onClick={() => handleDelete(pro._id)}
                      />
                    </div>
                  </div>
                  <p className="text-red-500 text-[18px]">{pro.liveLink}</p>
                  <p className="text-[#1A3636]">{pro.description}</p>
                  <p className="bg-[#EFF4FC] w-fit my-2 md:hidden px-6 rounded-full text-[#197DDE]">
                    {pro.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="">
            No work experience added yet. Click on "Add Projects" to start.
          </p>
        )}
        <div
          onClick={() => {
            setAddModal(true);
            resetForm();
            setEditId(null);
          }}
          className="flex items-center cursor-pointer pl-10 md:pl-0"
        >
          <IoMdAdd />
          <p>Projects</p>
        </div>
      </div>
      {addModal && (
        <div className="w-[50%] bg-[#F5F5F5] p-3">
          <form className="flex flex-col gap-y-3" onSubmit={handleAddEducation}>
            <input
              type="text"
              placeholder="Project Name"
              className="p-2"
              value={projectName}
              required
              onChange={(e) => setDegree(e.target.value)}
            />
            <input
              type="text"
              placeholder="Start & End Date"
              className="p-2"
              value={year}
              required
              onChange={(e) => setYear(e.target.value)}
            />
            <input
              type="text"
              placeholder="Live link"
              className="p-2"
              value={liveLink}
              required
              onChange={(e) => setInstitution(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="p-2"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              {editId ? "Update Project" : "Add Projects"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Projects;
