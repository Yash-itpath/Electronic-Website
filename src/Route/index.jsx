import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../pages/Home";

import Product from "../pages/Product";
import Blog from "../pages/Blog";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Page from "../pages/Page";
import Publiclayout from "../layout/public_layout";
import Login from "../pages/login";
import WithAuth from "../hoc/with-auth";
import Cart from "../pages/Cart";
import WatchList from "../pages/Watchlist";

function AppRoutes() {
    
    // <Router>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/pages" element={<Page />} />
    //     <Route path="/product" element={<Product />} />
    //     <Route path="/blog" element={<Blog />} />
    //     <Route path="/shop" element={<Shop />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>

    const Route = createBrowserRouter([

        {
            path: "/",
            element: <Publiclayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/pages",
                    element: <Page />,
                },
                {
                    path: "/product",
                    element: <WithAuth><Product /></WithAuth>,

                },
                {
                    path: "/blog",
                    element: <WithAuth><Blog /></WithAuth>,
                },
                {
                    path: "/shop",
                    element: <WithAuth><Shop /></WithAuth>,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },{
                    path: "/login",
                    element: <Login />,
                },{
                    path: "/cart",
                    element: <Cart />,
                },{
                    path: "/like",
                    element: <WatchList />,
                },
            ]
                
        },
        

    ])
    return <RouterProvider router={Route} />

   
    
}

export default AppRoutes;