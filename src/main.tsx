import React from "react";
import ReactDOM from "react-dom/client";
import { BasePage } from "./components/basePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Toaster } from "./components/ui/toaster";
import { LandingPage } from "./features/landing/landingPage";

const router = createBrowserRouter([
  {
    element: <BasePage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
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
