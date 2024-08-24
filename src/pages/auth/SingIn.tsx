import { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { TiShoppingBag } from "react-icons/ti";

type Props = {
  singUpModal: boolean;
  setSingUpModal: (singUpModal: boolean) => void;
};

const SingIn = ({ singUpModal, setSingUpModal }: Props) => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userRole, setUserRole] = useState("Employer");

  useEffect(() => {
    if (singUpModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [singUpModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formInfo, role: userRole });
  };

  return (
    <div className={`absolute top-0 bg-gray-950 bg-opacity-30 w-full h-screen`}>
      <div className="absolute left-[35%] top-[20%] bg-white text-black h-fit p-7 rounded-md lg:w-[30%]">
        <span
          className="absolute top-0 text-gray-950 font-bold cursor-pointer right-1"
          onClick={() => setSingUpModal(false)}
        >
          X
        </span>
        <h1 className="text-gray-900 font-semibold text-center">
          Create a Free JobHorizon Account
        </h1>
        {/* --------------------- */}
        <div className="flex items-center gap-x-14 justify-center my-3">
          <div
            onClick={() => setUserRole("Candidate")}
            className={`${
              userRole === "Candidate" ? "bg-green-600" : "bg-blue-500"
            } rounded p-1 text-white`}
          >
            <button className="flex items-center gap-1">
              <span>
                <FaUserTie />
              </span>
              <span>Candidate</span>
            </button>
          </div>
          <div
            className={`${
              userRole === "Employer" ? "bg-green-600" : "bg-blue-500"
            } rounded p-1 text-white`}
            onClick={() => setUserRole("Employer")}
          >
            <button className="flex items-center gap-1">
              <span>
                <TiShoppingBag />
              </span>
              <span>Employer</span>
            </button>
          </div>
        </div>
        {/* ------------------- */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-y-2 mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formInfo.name}
              onChange={handleChange}
              className="border border-gray-900 p-1 rounded-sm text-gray-950"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-y-2 mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formInfo.email}
              onChange={handleChange}
              className="border border-gray-900 p-1 rounded-sm text-gray-950"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formInfo.password}
              onChange={handleChange}
              className="border border-gray-900 p-1 rounded-sm text-gray-950"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-blue-600 mt-2 text-white p-1 rounded hover:bg-blue-950 duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
