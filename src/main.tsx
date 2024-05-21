import React from "react";
import ReactDOM from "react-dom/client";
import { BasePage } from "./components/basePage";
import { JobOffert } from "./features/offert/jobOffert";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { SignUp } from "./features/auth/pages/signUp";
import { Login } from "./features/auth/pages/login";
import { Toaster } from "./components/ui/toaster";

const router = createBrowserRouter([
  {
    element: <BasePage />,
    children: [
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/offert",
        element: <JobOffert />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <Toaster />
  </React.StrictMode>
);
