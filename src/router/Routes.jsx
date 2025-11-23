import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>
      }
    ]
  },
]);

export default router;