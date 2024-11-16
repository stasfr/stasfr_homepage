import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import Contacts from "@/pages/contacts";
import NotFound from "@/pages/notFound";
import Default from "@/layouts/default";

const router = createBrowserRouter([
  {
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export default router;
