import { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { TiShoppingBag } from "react-icons/ti";
import { IoMdClose, IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useRegistrationMutation } from "../../redux/feature/auth/authApi";
import { toast, Toaster } from "react-hot-toast";

type Props = {
  loginModal?: boolean;
  setLoginModal?: (loginModal: boolean) => void;
  singUpModal?: boolean;
  setSingUpModal?: (singUpModal: boolean) => void;
};

const SingIn = ({ singUpModal, setSingUpModal, setLoginModal }: Props) => {
  const [registration] = useRegistrationMutation();
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [togglePass, setTogglePass] = useState(false);
  const [userRole, setUserRole] = useState("employer");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const role = userRole;
    const userInfo = {
      ...formInfo,
      role,
    };
    const res = await registration(userInfo);
    console.log(res)
    if (res.error) {
      if ("data" in res.error) {
        const err = res.error as any;
        if (err.data.err.code === 11000) {
          toast.error("Email already exist");
        }
      }
    }
    if (res?.data?.success && setSingUpModal && setLoginModal) {
      setTimeout(() => {
        setSingUpModal(false);
        setLoginModal(true);
      }, 600);

      toast?.success("Register successful ");
    }
  };

  return (
    <div className={`absolute top-0 bg-gray-950 bg-opacity-30 w-full h-screen`}>
      <Toaster />
      <div className="absolute left-[10%] md:left-[30%] md:top-[10%] lg:left-[35%] top-[20%] lg:top-[25%] bg-white text-black h-fit p-7 rounded-md lg:w-[30%]">
        {setSingUpModal && (
          <span
            className="absolute top-0 text-gray-950 font-bold cursor-pointer right-1"
            onClick={() => setSingUpModal(false)}
          >
            <IoMdClose />
          </span>
        )}
        <h1 className="text-gray-900 font-semibold text-center">
          Create a Free JobHorizon Account
        </h1>
        {/* --------------------- */}
        <div className="flex items-center gap-x-14 justify-center my-3">
          <div
            onClick={() => setUserRole("candidate")}
            className={`${
              userRole === "candidate"
                ? "bg-green-600 text-white"
                : "text-black"
            } rounded p-1 text-black`}
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
              userRole === "Employer" ? "bg-green-600 text-white" : "text-black"
            } rounded p-1 text-black`}
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
              required
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
              required
            />
          </div>
          <div className="flex flex-col gap-y-2 relative">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formInfo.password}
              onChange={handleChange}
              className="border border-gray-900 p-1 rounded-sm text-gray-950"
              placeholder="Password"
              required
            />
            <div
              onClick={() => setTogglePass(!togglePass)}
              className="cursor-pointer absolute top-11 right-2"
            >
              {togglePass ? <IoMdEye /> : <IoMdEyeOff />}
            </div>
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
