import {
  iClaimReports,
  iDashboard,
  iFeatured,
  iMediaManagement,
  iObserver,
  iSponsor,
  iVerificationRequests,
} from "../icons/dashboard-icons/dashicons";

export const sidebarItems = [
  { id: 1, name: "Dashboard", path: "/dashboard", icon: iDashboard },
  { id: 2, name: "Overseer", path: "/dashboard/overseer", icon: iObserver },
  {
    id: 3,
    name: "Media Management",
    path: "/dashboard/media-management",
    icon: iMediaManagement,
  },
  {
    id: 4,
    name: "Featured",
    path: "/dashboard/featured",
    icon: iFeatured,
  },
  {
    id: 5,
    name: "Sponsors",
    path: "/dashboard/sponsors",
    icon: iSponsor,
  },
];

export const sidebarBottomItems = [
  {
    id: 1,
    name: "Claims / Reports",
    path: "/dashboard/claims/reports",
    icon: iClaimReports,
  },
  {
    id: 2,
    name: "Verification Requests",
    path: "/dashboard/verification-requests",
    icon: iVerificationRequests,
  },
];
