import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import SingIn from "../pages/auth/SingIn";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <SingIn />,
  },
]);
export default router;
