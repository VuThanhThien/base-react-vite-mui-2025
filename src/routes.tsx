import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

// Admin
const Admin = lazy(() => import("./admin/pages/Admin"));
const Dashboard = lazy(() => import("./admin/pages/Dashboard"));
const Faq = lazy(() => import("./admin/pages/Faq"));
const HelpCenter = lazy(() => import("./admin/pages/HelpCenter"));
const Home = lazy(() => import("./admin/pages/Home"));
const Profile = lazy(() => import("./admin/pages/Profile"));
const ProfileActivity = lazy(() => import("./admin/pages/ProfileActivity"));
const ProfileInformation = lazy(
  () => import("./admin/pages/ProfileInformation")
);
const ProfilePassword = lazy(() => import("./admin/pages/ProfilePassword"));

// Auth
const ForgotPassword = lazy(() => import("./auth/pages/ForgotPassword"));
const ForgotPasswordSubmit = lazy(
  () => import("./auth/pages/ForgotPasswordSubmit")
);
const Login = lazy(() => import("./auth/pages/Login"));
const Register = lazy(() => import("./auth/pages/Register"));

// Core
const Forbidden = lazy(() => import("./core/pages/Forbidden"));
const NotFound = lazy(() => import("./core/pages/NotFound"));
const UnderConstructions = lazy(
  () => import("./core/pages/UnderConstructions")
);

// Landing
const Landing = lazy(() => import("./landing/pages/Landing"));

// Users
const UserManagement = lazy(() => import("./users/pages/UserManagement"));


// Lazy imports remain the same...

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "faq",
        element: <Faq />
      },
      {
        path: "help",
        element: <HelpCenter />
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <ProfileActivity />
          },
          {
            path: "information",
            element: <ProfileInformation />
          },
          {
            path: "password",
            element: <ProfilePassword />
          }
        ]
      },
      {
        path: "projects",
        element: <Navigate to="/under-construction" replace />
      },
      {
        path: "user-management",
        element: <UserManagement />
      }
    ]
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "forgot-password-submit",
    element: <ForgotPasswordSubmit />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "under-construction",
    element: <UnderConstructions />
  },
  {
    path: "403",
    element: <Forbidden />
  },
  {
    path: "404",
    element: <NotFound />
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />
  }
]; 