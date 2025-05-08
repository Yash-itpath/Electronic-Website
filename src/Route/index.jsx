import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Login from "../pages/login";
import Cart from "../pages/Cart";
import WatchList from "../pages/Watchlist";
import NFound from "../pages/NotFound";

import Publiclayout from "../layout/public_layout";
import WithAuth from "../hoc/with-auth";
import Ncart from "../pages/Ncart";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Publiclayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/product", element: <WithAuth><Product /></WithAuth> },
        { path: "/shop", element: <WithAuth><Shop /></WithAuth> },
        { path: "/contact", element: <Contact /> },
        { path: "/login", element: <Login /> },
        { path: "/cart", element: <Cart /> },
        { path: "/like", element: <WatchList /> },
        { path: "/ncart", element: <Ncart /> },

        // 👇 Catch-all 404 route
        { path: "*", element: <NFound /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
