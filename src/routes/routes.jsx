import {
  createBrowserRouter,

} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashbord from "../pages/auth/Dashbord";
import SignupForm from "../pages/signupPage";
import LoginForm from "../pages/loginPage";
import AuthUser from "./protect/AuthUser";
import ProfilePage from "../pages/auth/Profile";

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
        path: "signup-page",
        element: <SignupForm />
      },
      {
        path: "login-page",
        element: <LoginForm />
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