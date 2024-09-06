import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import SingIn from "../pages/auth/SingIn";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import EmployerLayout from "../layout/EmployerLayout";
import EmployerDashboard from "../pages/Dashboard/Employer/EmployerDashboard";
import CompanyProfile from "../pages/Dashboard/Employer/CompanyProfile";
import PostJob from "../pages/Dashboard/Employer/PostJob";
import CandidateLayout from "../layout/CandidateLayout";
import CandidateProfile from "../pages/Dashboard/candidate/Candidate-Profile/CandidateProfile";


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
  {
    path: "/employ-dashboard",
    element: <EmployerLayout />,
    children: [
      {
        path: "dashboard-hero",
        element: <EmployerDashboard />,
      },
      {
        path: "company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "post-job",
        element: <PostJob />,
      },
    ],
  },
  {
    path:"/candidate/dashboard",
    element:<CandidateLayout/>,
    children:[
      {
        path:"myProfile",
        element:<CandidateProfile/>
      }
    ]
  }
]);
export default router;
