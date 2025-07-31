import {
  createBrowserRouter,

} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashbord from "../pages/auth/Dashbord";
import SignupForm from "../pages/signupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,

    children: [
      {
        path: "/",
        element: <Dashbord />
      },
      {
        path: "signup",
        element: <SignupForm />
      }
    ]
  },
]);