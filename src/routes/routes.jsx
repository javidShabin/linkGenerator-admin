import {
  createBrowserRouter,

} from "react-router-dom";
import AdminDashboard from "../layouts/AdminDashboard";
import Dashboard from "../pages/Dashbord";
import LoginForm from "../pages/LoginPage";
import SignupForm from "../pages/SignupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,

    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "login-page",
        element: <LoginForm />
      },
      {
        path: "signup-page",
        element: <SignupForm />
      }
    ]
  },
]);