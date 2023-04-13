import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminDeptDashboard from "../layouts/adminDeptLayouts/AdminDeptDashboard";
import Auth from "../layouts/Auth";
import HodDashboard from "../layouts/HodDasboard";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ErrorPage from "../pages/ErrorPage";
import Landing from "../pages/Landing";
import ForgetPassword from "../components/auth/ForgetPassword";
import ResetPassword from "../components/auth/ResetPassword";
import DashboardIndexAD from "../layouts/adminDeptLayouts/DashboardIndex";
import DashboardIndexFaculty from "../layouts/facultyLayout/DashboardIndexFaculty";
import FacultyDashboard from "../layouts/facultyLayout/FacultyDashboard";
import Attendance from "../layouts/facultyLayout/Attendance";
import Salary from "../layouts/facultyLayout/Salary";
import SalaryApplicationLayout from "../layouts/adminDeptLayouts/SalaryApplicationLayout";
import DepartmentsAndFaculties from "../layouts/adminDeptLayouts/DepartmentsAndFaculties";

import Landing2 from "../pages/Landing2";
import FacultySetting from "../layouts/facultyLayout/FacultySetting";
import AdminDeptSetting from "../layouts/adminDeptLayouts/AdminDeptSetting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing2 />,
    errorElement: <ErrorPage />,
  },

  //Admin Dept Dashboard
  {
    path: "/adminDept",
    element: <AdminDeptDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardIndexAD></DashboardIndexAD>,
      },
      {
        path: "/adminDept/dashboard",
        element: <DashboardIndexAD></DashboardIndexAD>,
      },
      {
        path: "/adminDept/settings",
        element: <AdminDeptSetting />,
      },
      {
        path: "/adminDept/applications",
        element: <SalaryApplicationLayout />,
      },
      {
        path: "/adminDept/departmentsAndfaculties",
        element: <DepartmentsAndFaculties />,
      },
    ],
  },

  //Hod Dept Dashboard
  {
    path: "/dashboard-Dept",
    element: <HodDashboard />,
    errorElement: <ErrorPage />,
  },

  //Faculty Dashboard
  {
    path: "/faculty",
    element: <FacultyDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardIndexFaculty />,
      },
      {
        path: "/faculty/settings",
        element: <FacultySetting />,
      },
      {
        path: "/faculty/salaryStatus",
        element: <Salary />,
      },
      {
        path: "/faculty/attendance",
        element: <Attendance />,
      },
    ],
  },

  //Auth login/signup
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/Register",
        element: <Register />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/auth/reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
]);
