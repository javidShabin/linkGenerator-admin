import {
  createBrowserRouter,

} from "react-router-dom";
import AdminDashboard from "../layouts/AdminDashboard";
import Dashboard from "../pages/Dashbord";
import LoginForm from "../pages/LoginPage";
import SignupForm from "../pages/SignupPage";
import AuthUser from "./protect/AuthUser";
import ProfilePage from "../pages/auth/ProfilePage";

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
      },


      {
        path: "admin",
        element: <AuthUser />,

        children: [
          {
            path: "profile",
            element: <ProfilePage />
          }
        ]
      }
    ]
  },
]);