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
import CopyrightInformation from "../pages/CopyrightInformation/CopyrightInformation";
import Socials from "../pages/Socials/Socials";
import OfficialBrands from "../pages/OfficialBrands/OfficialBrands";
import Contact from "../pages/Contact/Contact";
import Messages from "../pages/Messages/Messages";
import Wallpaper from "../pages/Wallpaper/Wallpaper";
import SearchWallpapers from "../pages/Wallpapers/SearchWallpapers";
import Profile from "../pages/Profile/Profile";
import OfficialBrandProfile from "../pages/OfficialBrandProfile/OfficialBrandProfile";
import Upload from "../pages/Upload/Upload";
import DraftAndPublish from "../pages/Upload/DraftAndPublish";
import AccountSettings from "../pages/AccountSettings/AccountSettings";
import AccountVerification from "../pages/AccountVerification/AccountVerification";
import MediaCenter from "../pages/MediaCenter/MediaCenter";
import EmailVerify from "../pages/AuthPages/Signup/EmailVerify";
import PrivateRoute from "./PrivateRoute";
import PublicProfile from "../pages/Profile/PublicProfile";
import VerificationPrivateRoute from "./VerificationPrivateRoute";
import OfficialBrandProfilePublic from "../pages/OfficialBrandProfile/OfficialBrandProfilePublic";
import ProfileVerify from "../pages/Test/ProfileVerify";
import MessageLayout from "../layouts/MessageLayout";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },

      {
        path: "/official-brands",
        element: <OfficialBrands />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/wallpapers",
        element: <SearchWallpapers />,
      },

      {
        path: "/wallpapers/:slug",
        element: <Wallpaper />,
      },
      {
        path: "/profiles/:username",
        element: <PublicProfile />,
      },

      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/brands/:username",
      //   element: <OfficialBrandProfilePublic />,
      // },
      // {
      //   path: "/my-brand",
      //   element: (
      //     <VerificationPrivateRoute>
      //       <OfficialBrandProfile />
      //     </VerificationPrivateRoute>
      //   ),
      // },
      {
        path: "/upload",
        element: (
          <PrivateRoute>
            <Upload />
          </PrivateRoute>
        ),
      },
      {
        path: "/vault",
        element: (
          <PrivateRoute>
            <DraftAndPublish />
          </PrivateRoute>
        ),
      },
      {
        path: "/account-settings",
        element: (
          <PrivateRoute>
            <AccountSettings />
          </PrivateRoute>
        ),
      },
      {
        path: "/account-verification",
        element: (
          <PrivateRoute>
            <AccountVerification />
          </PrivateRoute>
        ),
      },
      {
        path: "/media-center/favorites",
        element: (
          <PrivateRoute>
            <MediaCenter pathname={"Favorites"} />
          </PrivateRoute>
        ),
      },
      {
        path: "/media-center/collections",
        element: (
          <PrivateRoute>
            <MediaCenter pathname={"Collections"} />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
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
        path: "/copyright-information",
        element: <CopyrightInformation />,
      },
      {
        path: "/socials",
        element: <Socials />,
      },

      // test routes
      {
        path: "/profile-verify",
        element: <ProfileVerify />,
      },
    ],
  },

  // without footer layout
  {
    path: "/",
    element: <MessageLayout />,
    children: [
      {
        path: "/messages",
        element: (
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/signup-confirmation", element: <SignUpConfirmation /> },
      { path: "/verify/:token", element: <EmailVerify /> },
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
        path: "/change-password/:token",
        element: <NewPassword />,
      },
    ],
  },
]);
