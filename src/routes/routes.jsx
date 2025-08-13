import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../layouts/AdminDashboard";
import Dashboard from "../pages/Dashbord";
import LoginForm from "../pages/LoginPage";
import SignupForm from "../pages/SignupPage";
import AuthUser from "./protect/AuthUser";
import ProfilePage from "../pages/auth/ProfilePage";
import AllUsers from "../pages/auth/AllUsers";
import ProUsers from "../pages/auth/ProUsers";
import PaymentDetails from "../pages/auth/PaymentDetails";
import Plans from "../pages/auth/Plans";
import ProfileEdite from "../pages/auth/ProfileEdit";
import AddPackageModal from "../components/AddPackage";
import ForgotPassword from "../components/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "login-page",
        element: <LoginForm />,
      },
      {
        path: "signup-page",
        element: <SignupForm />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },

      {
        path: "admin",
        element: <AuthUser />,

        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "pro-users",
            element: <ProUsers />,
          },
          {
            path: "payment-details",
            element: <PaymentDetails />,
          },
          {
            path: "payment-plans",
            element: <Plans />,
          },
          {
            path: "edit-profile",
            element: <ProfileEdite />
          },
          {
            path: "add-plans",
            element: <AddPackageModal />
          }
        ],
      },
    ],
  },
]);
