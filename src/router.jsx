import { createBrowserRouter } from "react-router-dom";
import VideosHome from "./components/videosHome/VideosHome.jsx";
import DashBoardLayout from "./layouts/DashBoardLayout.jsx";
import VideosInfo from "./components/videosInfo/VideosInfo.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <VideosHome />,
      },
      {
        path: "/videos",
        element: <VideosInfo />,
      },
    ],
  },
]);
