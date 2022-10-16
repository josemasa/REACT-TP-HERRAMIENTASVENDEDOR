import HomePage from "../pages/HomePage";
import React from "react";
import { createBrowserRouter, Route } from "react-router-dom";

import Contact from "../components/AgendaContactos/contact";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "../components/AgendaContactos/root";

const Routeruno = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

export default Routeruno;
