import { createBrowserRouter, Outlet } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import HomePage from "../pages/Home";
import CasesPage from "../pages/Cases";
import GamesPage from "../pages/Games";
import FriendsPage from "../pages/Friends";
import ProfilePage from "../pages/Profile";

function RootLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cases",
        element: <CasesPage />,
      },
      {
        path: "games",
        element: <GamesPage />,
      },
      {
        path: "friends",
        element: <FriendsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);