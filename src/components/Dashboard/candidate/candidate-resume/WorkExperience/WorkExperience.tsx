import "../Education/education.css";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { useGetMyResumeQuery } from "../../../../../redux/feature/candidate/resumeApi";

type Props = {
  works: any[];
  setWorks: (works: any) => void;
};

const WorkExperience = ({ setWorks }: Props) => {
  const [work, setWork] = useState<any>([]);
  const { data: myResume } = useGetMyResumeQuery(undefined);

  const [positionName, setPositionName] = useState("");
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const [addModal, setAddModal] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddEducation = (e: any) => {
    e.preventDefault();

    if (editId !== null) {
      const updatedWork = work.map((work: any) =>
        work._id === editId
          ? { ...work, positionName, company, year, description }
          : work
      );
      setWork(updatedWork);
      setWorks(updatedWork);
      setEditId(null);
    } else {
      const newWork = {
        positionName,
        company,
        year,
        description,
      };

      setWork([...work, newWork]);
      setWorks([...work, newWork]);
    }
    setAddModal(false);
    resetForm();
  };

  const resetForm = () => {
    setPositionName("");
    setYear("");
    setCompany("");
    setDescription("");
  };

  const handleEdit = (work: any) => {
    setPositionName(work.positionName);
    setYear(work.year);
    setCompany(work.company);
    setDescription(work.description);
    setEditId(work._id);
    setAddModal(true);
  };

  const handleDelete = (id: any) => {
    setAddModal(false);
    const filteredWork = work.filter((edu: any) => edu._id !== id);
    setWork(filteredWork);
    setWorks(filteredWork);
  };
  useEffect(() => {
    setWork(myResume?.data?.works || []);
    setWorks(myResume?.data?.works || []);
  }, [myResume]);
  return (
    <div className="py-12">
      <h1>Work & Experience</h1>
      <div className="flex flex-col md:flex-row items-start justify-between mt-4">
        {work?.length === 0 ? (
          <p>No work experience added yet. Click on "Add Work" to start.</p>
        ) : (
          <div className="education-section flex">
            {work?.map((work: any, i: any) => (
              <div className="education-item" key={i}>
                <div className="badge-column">
                  <div className="badge">{work.company?.slice(0)[0]}</div>
                </div>
                <div className="education-details">
                  <div className="flex items-center gap-x-5">
                    <h3 className="font-semibold text-[#254336]">
                      {work.positionName}
                    </h3>
                    <p className="bg-[#FEF2D9] px-6 rounded-full text-[#FAB800] hidden md:block">
                      {work.year}
                    </p>
                    <div className="flex items-center gap-x-2">
                      <MdOutlineEdit
                        className="cursor-pointer"
                        onClick={() => handleEdit(work)}
                      />
                      <MdOutlineDeleteForever
                        className="cursor-pointer"
                        onClick={() => handleDelete(work._id)}
                      />
                    </div>
                  </div>
                  <p className="text-red-500 text-[18px]">{work.company}</p>
                  <p className="text-[#1A3636]">{work.description}</p>
                  <p className="bg-[#FEF2D9] w-fit px-6 rounded-full text-[#FAB800] md:hidden">
                    {work.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          onClick={() => {
            setAddModal(true);
            resetForm();
            setEditId(null);
          }}
          className="flex items-center cursor-pointer pl-14 md:pl-5 "
        >
          <IoMdAdd />
          <p>Work</p>
        </div>
      </div>

      {addModal && (
        <div className="bg-slate-400 p-3">
          <form className="flex flex-col gap-y-3" onSubmit={handleAddEducation}>
            <input
              type="text"
              placeholder="Position Name"
              className="p-2"
              value={positionName}
              required
              onChange={(e) => setPositionName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Year"
              className="p-2"
              value={year}
              required
              onChange={(e) => setYear(e.target.value)}
            />

            <input
              type="text"
              placeholder="Company Name"
              className="p-2"
              value={company}
              required
              onChange={(e) => setCompany(e.target.value)}
            />

            <textarea
              placeholder="Description"
              className="p-2"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              {editId ? "Update Work & Experience" : "Add Work & Experience"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
