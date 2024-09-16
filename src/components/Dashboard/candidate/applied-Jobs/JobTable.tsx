import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaLocationPin } from "react-icons/fa6";
import bag from "../../../../assets/bag.png";

const JobTable = ({ appliedJob }: { appliedJob: [] }) => {
  const rows = appliedJob;
  const date = new Date();
  const currentDate = date.toISOString().slice(0, 10);

  return (
    <div>
      <TableContainer component={Paper} className="h-[30%] scroll-container p-2">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-blue-300">
            <TableRow>
              <TableCell className="text-blue-500">Title</TableCell>
              <TableCell className="text-blue-500">Applications</TableCell>
              <TableCell className="text-blue-500">Date Applied</TableCell>
              <TableCell className="text-blue-500">Status</TableCell>
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
                      src={row.job.company.image}
                      alt=""
                    />
                    <div className="">
                      <p className="mb-2 text-gray-950 text-[18px]">
                        {row.job.title}
                      </p>
                      <div className="flex items-center text-gray-500 gap-x-2">
                        <div className="flex items-center gap-x-1">
                          <img className="w-[12px]" src={bag} alt="" />
                          <p>{row.job.company.companyName}</p>
                        </div>
                        <div className="flex items-center gap-x-1">
                          <FaLocationPin />
                          <p>{row.job.country}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row?.applicationStatus}
                </TableCell>
                <TableCell component="th" scope="row">
                  <p> {row?.createdAt.split("T")[0]}</p>
                </TableCell>
                <TableCell component="th" scope="row">
                  <p
                    className={`${
                      row.job.deadline > currentDate
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {row.job.deadline > currentDate ? "Active" : "Expired"}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default JobTable;
