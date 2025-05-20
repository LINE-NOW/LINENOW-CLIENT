import { ROUTE } from "@constants/route";

import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// layouts
import RootLayout from "@layouts/RootLayout";
import DefaultLayout from "@layouts/DefaultLayout";

// pages
import MainPage from "@pages/main/MainPage";
import BoothDetailPage from "@pages/boothDetail/BoothDetailPage";
import SettingPage from "@pages/setting/SettingPage";
import WaitingCheckPage from "@pages/waitingCheck/WaitingCheckPage";
import WaitingDetailPage from "@pages/waitingDetail/WaitingDetailPage";
import MyWaitingPage from "@pages/myWaiting/MyWaiting";
import SignupPage from "@pages/signup/SignupPage";
import GuestRoute from "./GuestRoute";
import LoginPage from "@pages/login/LoginPage";
import AuthPage from "@pages/auth/AuthPage";

const router = createBrowserRouter([
  {
    path: ROUTE.DEFAULT,
    element: <RootLayout />,
    children: [
      { path: ROUTE.DEFAULT, element: <MainPage /> },
      {
        element: <DefaultLayout />,
        children: [
          { path: ROUTE.BOOTH_DETAIL(), element: <BoothDetailPage /> },
          {
            element: <GuestRoute />,
            children: [
              { path: ROUTE.SIGNUP, element: <SignupPage /> },
              { path: ROUTE.LOGIN, element: <AuthPage /> },
            ],
          },
          {
            element: <ProtectedRoute />,
            children: [
              { path: ROUTE.WAITING_CHECK, element: <WaitingCheckPage /> },
              { path: ROUTE.WAITING_DETAIL(), element: <WaitingDetailPage /> },
              { path: ROUTE.MY_WAITING, element: <MyWaitingPage /> },
              { path: ROUTE.SETTING, element: <SettingPage /> },
            ],
          },
        ],
      },
    ],
  },
]);
export default router;
