/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home/Home";
// import OfficialBrands from "../pages/OfficialBrands/OfficialBrands";
// import SearchWallpapers from "../pages/Wallpapers/SearchWallpapers";
// import Profile from "../pages/Profile/Profile";
// import PublicProfile from "../pages/Profile/PublicProfile";
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
import Contact from "../pages/Contact/Contact";
import Messages from "../pages/Messages/Messages";
import Wallpaper from "../pages/Wallpaper/Wallpaper";
import Upload from "../pages/Upload/Upload";
import DraftAndPublish from "../pages/Upload/DraftAndPublish";
import AccountSettings from "../pages/AccountSettings/AccountSettings";
import AccountVerification from "../pages/AccountVerification/AccountVerification";
import MediaCenter from "../pages/MediaCenter/MediaCenter";
import EmailVerify from "../pages/AuthPages/Signup/EmailVerify";
import PrivateRoute from "./PrivateRoute";
import ProfileVerify from "../pages/Test/ProfileVerify";
import VerifyApprovedPrivateRoute from "./VerifyApprovedPrivateRoute";
import { Suspense, lazy } from "react";
import PageLoading from "../components/common/loadings/PageLoading";
import Dashboard from "../pages/DashboardPages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Overseer from "../pages/DashboardPages/Overseer/Overseer";
import MediaManagement from "../pages/DashboardPages/MediaManagement/MediaManagement";
import Featured from "../pages/DashboardPages/Featured/Featured";
import Sponsors from "../pages/DashboardPages/Sponsors/Sponsors";
import ClaimsReports from "../pages/DashboardPages/ClaimsReports/ClaimsReports";
import VerificationRequests from "../pages/DashboardPages/VerificationRequests/VerificationRequests";
import NotFound from "../pages/NotFound/NotFound";
import TagDetails from "../pages/Tags/TagDetails";

const Home = lazy(() => import("../pages/Home/Home"));

const OfficialBrands = lazy(() =>
  import("../pages/OfficialBrands/OfficialBrands")
);

const SearchWallpapers = lazy(() =>
  import("../pages/Wallpapers/SearchWallpapers")
);

const Profile = lazy(() => import("../pages/Profile/Profile"));
const PublicProfile = lazy(() => import("../pages/Profile/PublicProfile"));

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<PageLoading />}>
            <Home />
          </Suspense>
        ),
      },

      {
        path: "/official-brands",
        element: (
          <Suspense fallback={<PageLoading />}>
            <OfficialBrands />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/wallpapers",
        element: (
          <Suspense fallback={<PageLoading />}>
            <SearchWallpapers />
          </Suspense>
        ),
      },

      {
        path: "/w/:slug",
        element: <Wallpaper />,
      },
      {
        path: "/profiles/:username",
        element: (
          <Suspense fallback={<PageLoading />}>
            <PublicProfile />
          </Suspense>
        ),
      },

      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Suspense fallback={<PageLoading />}>
              <Profile />
            </Suspense>
          </PrivateRoute>
        ),
      },

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
          <VerifyApprovedPrivateRoute>
            <AccountVerification />
          </VerifyApprovedPrivateRoute>
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
      {
        path: "/tags/:tag",
        element: <TagDetails />,
      },

      // test routes
      {
        path: "/profile-verify",
        element: <ProfileVerify />,
      },
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
    element: <MainLayout></MainLayout>,
    children: [{ path: "*", element: <NotFound /> }],
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

  //* dashboard routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/", element: <Dashboard /> },
      { path: "/dashboard/overseer", element: <Overseer /> },
      { path: "/dashboard/media-management", element: <MediaManagement /> },
      { path: "/dashboard/featured", element: <Featured /> },
      { path: "/dashboard/sponsors", element: <Sponsors /> },
      { path: "/dashboard/claims/reports", element: <ClaimsReports /> },
      {
        path: "/dashboard/verification-requests",
        element: <VerificationRequests />,
      },
    ],
  },
]);
