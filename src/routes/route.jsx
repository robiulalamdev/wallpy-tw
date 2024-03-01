import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/AuthPages/Login/Login";
import Signup from "../pages/AuthPages/Signup/Signup";
import SignUpConfirmation from "../pages/AuthPages/Signup/SignUpConfirmation";
import PasswordChangedSuccess from "../pages/AuthPages/PasswordChangedSuccess/PasswordChangedSuccess";
import ForgotPassword from "../pages/AuthPages/ForgotPassword/ForgotPassword";
import ForgotEmail from "../pages/AuthPages/ForgotEmail/ForgotEmail";
import ResetPassword from "../pages/AuthPages/ResetPassword/ResetPassword";
import NewPassword from "../pages/AuthPages/NewPassword/NewPassword";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CommunityRules from "../pages/CommunityRules/CommunityRules";
import About from "../pages/About/About";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/terms-and-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/community-rules",
        element: <CommunityRules />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  // auth routes
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/signup-confirmation", element: <SignUpConfirmation /> },
      {
        path: "/password-changed-success",
        element: <PasswordChangedSuccess />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/forgot-email",
        element: <ForgotEmail />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/new-password",
        element: <NewPassword />,
      },
    ],
  },
]);
