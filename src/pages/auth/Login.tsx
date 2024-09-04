import { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import decodeJwt from "../../utils/decodeJwt";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

type Props = {
  loginModal?: boolean;
  setLoginModal?: (loginModal: boolean) => void;
};

const Login = ({ loginModal, setLoginModal }: Props) => {
  const dispatch = useAppDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  useEffect(() => {
    if (loginModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loginModal]);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("password123");
  const [togglePass, setTogglePass] = useState(false);
  const handelLogin = async (e: any) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };
    const logRes = await login(userInfo);
    const res = await decodeJwt(logRes?.data?.data);
    dispatch(setUser({ user: res, token: logRes?.data?.data }));
    if (setLoginModal) {
      setLoginModal(false);
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      if ("data" in error) {
        const err = error as any;
        setErrorMessage(err.data.message);
      }
    }
  }, [error]);

  return (
    <div className={`absolute top-0 bg-gray-950 bg-opacity-30 w-full h-screen`}>
      <div className="absolute left-[20%] md:left-[23%] lg:left-[35%] top-[20%] bg-white text-black h-fit p-7 rounded-md w-[60%] lg:w-[30%]">
        {setLoginModal && (
          <span
            className="absolute top-0 text-gray-950 font-bold cursor-pointer right-1"
            onClick={() => setLoginModal(false)}
          >
            <IoMdClose />
          </span>
        )}
        <h1 className="text-gray-900 font-semibold">Login to JobHorizon</h1>
        <form onSubmit={handelLogin} className="w-full">
          <div className="flex flex-col gap-y-2 mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-900 p-1 rounded-sm text-gray-950"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-y-2 relative">
            <label htmlFor="password">Password</label>
            <input
              type={togglePass ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-900 p-1 rounded-sm text-gray-950"
              placeholder="Password"
            />
            <div
              onClick={() => setTogglePass(!togglePass)}
              className="cursor-pointer absolute top-11 right-2"
            >
              {togglePass ? <IoMdEye /> : <IoMdEyeOff />}
            </div>
          </div>
          {isLoading ? (
            <p className="text-center text-xl text-blue-600">loading..</p>
          ) : (
            <button className="w-full bg-blue-600 mt-2 text-white p-1 rounded hover:bg-blue-950 duration-300">
              Sing in
            </button>
          )}
        </form>
        <p className="text-red-500 text-center">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Login;
