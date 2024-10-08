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
import CandidateResume from "../pages/Dashboard/candidate/candidate-resume/CandidateResume";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/Job-details/JobDetails";
import AllApplicants from "../pages/Dashboard/Employer/AllApplicants";
import ManageJob from "../pages/Dashboard/Employer/ManageJob";
import AppliedJobs from "../pages/Dashboard/candidate/Applied-Jobs/AppliedJobs";
import Message from "../pages/Dashboard/Employer/Message";
import CandidateMessage from "../pages/Dashboard/candidate/CandidateMessage";
import VideoCall from "../pages/Dashboard/Employer/VideoCall";
import CVideo from "../pages/Dashboard/candidate/CVideo";
import CandidateDUi from "../components/Dashboard/candidate/CandidateDUi";
import CandidateRoute from "./privet-route/CandidateRoute";
import EmployerRoute from "./privet-route/employerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
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
        element: (
          <EmployerRoute>
            <EmployerDashboard />
          </EmployerRoute>
        ),
      },
      {
        path: "message",
        element: (
          <EmployerRoute>
            <Message />
          </EmployerRoute>
        ),
      },
      {
        path: "company-profile",
        element: (
          <EmployerRoute>
            <CompanyProfile />
          </EmployerRoute>
        ),
      },
      {
        path: "post-job",
        element: (
          <EmployerRoute>
            <PostJob />
          </EmployerRoute>
        ),
      },
      {
        path: "all-applicants",
        element: (
          <EmployerRoute>
            {" "}
            <AllApplicants />
          </EmployerRoute>
        ),
      },
      {
        path: "video-call",
        element: (
          <EmployerRoute>
            <VideoCall />
          </EmployerRoute>
        ),
      },

      {
        path: "manage-job",
        element: (
          <EmployerRoute>
            <ManageJob />
          </EmployerRoute>
        ),
      },
    ],
  },
  {
    path: "/candidate/dashboard",
    element: <CandidateLayout />,
    children: [
      {
        path: "dashboard-hero",
        element: (
          <CandidateRoute>
            <CandidateDUi />
          </CandidateRoute>
        ),
      },
      {
        path: "myProfile",
        element: (
          <CandidateRoute>
            <CandidateProfile />
          </CandidateRoute>
        ),
      },
      {
        path: "candidate-resume",
        element: (
          <CandidateRoute>
            <CandidateResume />
          </CandidateRoute>
        ),
      },
      {
        path: "applied-jobs",
        element: (
          <CandidateRoute>
            <AppliedJobs />
          </CandidateRoute>
        ),
      },
      {
        path: "message",
        element: (
          <CandidateRoute>
            <CandidateMessage />
          </CandidateRoute>
        ),
      },
      {
        path: "video",
        element: (
          <CandidateRoute>
            <CVideo />
          </CandidateRoute>
        ),
      },
    ],
  },
]);
export default router;
