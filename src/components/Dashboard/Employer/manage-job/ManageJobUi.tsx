import { useEmployerAllJobQuery } from "../../../../redux/feature/employer/jobApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import bag from "../../../../assets/bag.png";
import { toast, Toaster } from "react-hot-toast";
import { FaLocationPin } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import EditJob from "./EditJob";

const ManageJobUi = () => {
  const [jobId, setJobId] = useState("");
  const [editModal, setEditModal] = useState(false);
  const { data,refetch } = useEmployerAllJobQuery(undefined);
  const date = new Date();
  const currentDate = date.toISOString().slice(0, 10);
  const rows = data?.data;
  const modalRef = useRef<HTMLDivElement>(null);
  const handelEdit = (id: string) => {
    setJobId(id);
    setEditModal(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setEditModal(false);
    }
  };

  useEffect(() => {
    if (editModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editModal]);
  return (
    <div className="py-10 px-3">
      <Toaster />
      <TableContainer component={Paper} className="h-[30%] scroll-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-blue-300">
            <TableRow>
              <TableCell className="text-blue-500">Title</TableCell>
              <TableCell className="text-blue-500">Applications</TableCell>
              <TableCell className="text-blue-500">Created & Expired</TableCell>
              <TableCell className="text-blue-500">Status</TableCell>
              <TableCell className="text-blue-500">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows?.map((row: any, i: number) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div className="flex items-start gap-x-2">
                    <img
                      className="w-[60px] h-[60px] rounded"
                      src={row.company.image}
                      alt=""
                    />
                    <div className="">
                      <p className="mb-2 text-gray-950 text-[18px]">
                        {row.title}
                      </p>
                      <div className="flex items-center text-gray-500 gap-x-2">
                        <div className="flex items-center gap-x-1">
                          <img className="w-[12px]" src={bag} alt="" />
                          <p>{row.company.companyName}</p>
                        </div>
                        <div className="flex items-center gap-x-1">
                          <FaLocationPin />
                          <p>{row.country}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row?.applied} Applied
                </TableCell>
                <TableCell component="th" scope="row">
                  <p> {row?.createdAt.split("T")[0]}</p>
                  <p> {row?.deadline.split("T")[0]}</p>
                </TableCell>
                <TableCell component="th" scope="row">
                  <p
                    className={`${
                      row.deadline > currentDate
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {row.deadline > currentDate ? "Active" : "Expired"}
                  </p>
                </TableCell>

                <TableCell component="th" scope="row">
                  <button
                    onClick={() => handelEdit(row._id)}
                    className="text-white bg-blue-700 p-1 rounded-sm"
                  >
                    Edit Role
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {editModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded h-[600px] overflow-y-auto lg:w-[45%]"
          >
            <EditJob
              editModal={editModal}
              setEditModal={setEditModal}
              id={jobId}
              refetch={refetch}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageJobUi;
