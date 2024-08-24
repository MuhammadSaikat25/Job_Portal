import { useEffect } from "react";
type Props = {
  loginModal: boolean;
  setLoginModal: (loginModal: boolean) => void;
};

const Login = ({ loginModal, setLoginModal }: Props) => {

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

  return (
    <div className={`absolute top-0 bg-gray-950 bg-opacity-30 w-full h-screen`}>
      <div className="absolute left-[35%] top-[20%] bg-white text-black h-fit p-7 rounded-md lg:w-[30%]">
        <span
          className="absolute top-0 text-gray-950 font-bold cursor-pointer right-1"
          onClick={() => setLoginModal(false)}
        >
          X
        </span>
        <h1 className="text-gray-900 font-semibold">Login to JobHorizon</h1>
        <form className="w-full">
          <div className="flex flex-col gap-y-2 mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-900 p-1 rounded-sm text-gray-950"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-900 p-1 rounded-sm text-gray-950"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-blue-600 mt-2 text-white p-1 rounded hover:bg-blue-950 duration-300">Sing in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
