import Home from "./pages/Home";
import Video from "./pages/Video";
import DashboardLayout from "./layout/DashboardLayout";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/watch",
        element: <Video />,
      },
    ],
  },
];

export default routes;
