import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Bookings from "../pages/Bookings/Bookings";
import Cabins from "../pages/Cabins/Cabins";
import Users from "../pages/Users/Users";
import Settings from "../pages/Settings/Settings";
import AppLayout from "../pages/AppLayout/AppLayout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const routes = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/cabins",
        element: <Cabins />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
