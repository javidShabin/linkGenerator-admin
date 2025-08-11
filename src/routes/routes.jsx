import {
  createBrowserRouter,

} from "react-router-dom";
import AdminDashboard from "../layouts/AdminDashboard";
import Dashboard from "../pages/Dashbord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,

    children: [
      {
        path: "/",
        element: <Dashboard />
      }
    ]
  },
]);