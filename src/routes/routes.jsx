import {
  createBrowserRouter,

} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashbord from "../pages/auth/Dashbord";
import SignupForm from "../pages/signupPage";
import LoginForm from "../pages/loginPage";
import AuthUser from "./protect/AuthUser";
import ProfilePage from "../pages/auth/Profile";
import EditProfile from "../pages/auth/EditProfile";
import GetAllUsers from "../pages/auth/GetAllUsers";
import PremiumUser from "../pages/auth/PermiumUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,

    children: [
      {
        index: true,
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
          },
          {
            path: "settings/edit-profile",
            element: <EditProfile />
          },
          {
            path: "get-all-users",
            element: <GetAllUsers />
          },
          {
            path: "premium-users",
            element: <PremiumUser />
          }
        ]
      }
    ]
  },
]);