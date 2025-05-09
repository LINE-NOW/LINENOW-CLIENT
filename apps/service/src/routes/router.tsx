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
import TestWebSocket from "@pages/TestWebsocket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <MainPage /> },
      {
        element: <DefaultLayout />,
        children: [
          { path: "booth/:boothId", element: <BoothDetailPage /> },
          {
            element: <GuestRoute />,
            children: [
              { path: "signup", element: <SignupPage /> },
              { path: "login", element: <LoginPage /> },
            ],
          },
          {
            element: <ProtectedRoute />,
            children: [
              { path: "check", element: <WaitingCheckPage /> },
              { path: "waiting/:waitingID", element: <WaitingDetailPage /> },
              { path: "my-waiting", element: <MyWaitingPage /> },
              { path: "setting", element: <SettingPage /> },
              { path: "socket", element: <TestWebSocket /> },
            ],
          },
        ],
      },
    ],
  },
]);
export default router;
