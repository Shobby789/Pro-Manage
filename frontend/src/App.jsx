import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import React, { useEffect } from "react";
import Register from "./pages/register/Register";
import Auth from "./Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Sidebar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
