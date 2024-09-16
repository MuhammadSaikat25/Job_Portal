import "./education.css";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { useGetMyResumeQuery } from "../../../../../redux/feature/candidate/resumeApi";

type Props = {
  education: any[];
  setEducation: (education: any) => void;
};

const Education = ({ setEducation }: Props) => {
  const { data: myResume } = useGetMyResumeQuery(undefined);

  const [educations, setEducations] = useState<any[]>([]);
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [institution, setInstitution] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddEducation = (e: any) => {
    e.preventDefault();

    if (!degree || !year || !institution || !description) {
      setError("All fields are required.");
      return;
    }

    if (editId) {
      const updatedEducations = educations.map((edu) =>
        edu._id === editId
          ? { ...edu, degree, institution, year, description }
          : edu
      );
      setEducations(updatedEducations);
      setEducation(updatedEducations);
      setEditId(null);
    } else {
      const newEducation = {
        degree,
        institution,
        year,
        description,
      };
      setEducations([...educations, newEducation]);
      setEducation([...(myResume?.data?.education || []), newEducation]);
    }

    setAddModal(false);
    resetForm();
    setError("");
  };

  const resetForm = () => {
    setDegree("");
    setYear("");
    setInstitution("");
    setDescription("");
  };

  const handleEdit = (education: any) => {
    setDegree(education.degree || "");
    setYear(education.year || "");
    setInstitution(education.institution || "");
    setDescription(education.description || "");
    setEditId(education._id);
    setAddModal(true);
    setError("");
  };

  const handleDelete = (id: any) => {
    setAddModal(false);
    const filteredEducations = educations.filter((edu) => edu._id !== id);
    setEducations(filteredEducations);
    setEducation(filteredEducations);
  };
  useEffect(() => {
    setEducations(myResume?.data?.education || []);
    setEducation(myResume?.data?.education || []);
  }, [myResume]);

  return (
    <div className="w-full ">
      <h1>Education</h1>
      <div className="flex flex-col md:flex-row items-start justify-between mt-4">
        <div className="education-section flex">
          {educations?.length > 0 ? (
            educations?.map((edu, i: number) => (
              <div className="education-item" key={i}>
                <div className="badge-column">
                  <div className="badge ">{edu.institution?.slice(0)[0]}</div>
                </div>
                <div className="education-details">
                  <div className="flex items-center gap-x-5">
                    <h3 className="font-semibold text-[#254336]">
                      {edu.degree}
                    </h3>
                    <p className="bg-[#EF5A6F] bg-opacity-25 px-6 hidden rounded-full text-red-600 md:block">
                      {edu.year}
                    </p>
                    <div className="flex items-center gap-x-2">
                      <MdOutlineEdit
                        className="cursor-pointer"
                        onClick={() => handleEdit(edu)}
                      />
                      <MdOutlineDeleteForever
                        className="cursor-pointer"
                        onClick={() => handleDelete(edu._id)}
                      />
                    </div>
                  </div>
                  <p className="text-red-500 text-[18px]">{edu.institution}</p>
                  <p className="text-[#1A3636]">{edu.description}</p>
                  <p className="bg-[#EF5A6F] bg-opacity-25 px-6 rounded-full my-2 w-fit text-red-600 md:hidden">
                    {edu.year}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No education added yet. Click on "Add Education" to start.</p>
          )}
        </div>
        {/* -------------------------- Add education btn ---------------- */}
        <div
          onClick={() => {
            setAddModal(true);
            resetForm();
            setEditId(null);
            setError("");
          }}
          className="flex items-center cursor-pointer pl-10 md:pl-0"
        >
          <IoMdAdd />
          <p>Education</p>
        </div>
      </div>

      {/* ------------------------ add or update education---------------- */}
      {addModal && (
        <div className="bg-slate-400 p-3">
          <form className="flex flex-col gap-y-3" onSubmit={handleAddEducation}>
            {error && <p className="text-red-500">{error}</p>}
            <input
              type="text"
              placeholder="Degree"
              className="p-2"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
            <input
              type="text"
              placeholder="Year"
              className="p-2"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <input
              type="text"
              placeholder="Institution"
              className="p-2"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              {editId ? "Update Education" : "Add Education"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Education;
