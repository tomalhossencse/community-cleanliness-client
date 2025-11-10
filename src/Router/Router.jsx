import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Componets/Register";
import Login from "../Componets/Login";
import Issues from "../Pages/issues";
import AllIssues from "../Pages/AllIssues";
import MyIssues from "../Pages/MyIssues";
import MyContribution from "../Pages/MyContribution";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "issues",
        Component: Issues,
      },
      {
        path: "all-issues",
        element: (
          <PrivateRoute>
            <AllIssues />
          </PrivateRoute>
        ),
      },
      {
        path: "my-issues",
        element: (
          <PrivateRoute>
            <MyIssues />
          </PrivateRoute>
        ),
      },
      {
        path: "my-contribution",
        element: (
          <PrivateRoute>
            <MyContribution />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
