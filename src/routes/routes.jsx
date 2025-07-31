import {
  createBrowserRouter,

} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashbord from "../pages/auth/Dashbord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,

    children: [
      {
        path: "/",
        element: <Dashbord />
      }
    ]
  },
]);