import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
import Home from "./pages/Home/Home";

const Layout = () => {
 return (
  <div className="app">
   <Navbar />
   <Outlet />
   <Footer />
  </div>
 );
};

const router = createBrowserRouter([
 {
  path: "/",
  element: <Layout />,
  children: [
   {
    path: "/",
    element: <Home />,
   },
  ],
 },
]);

const App: React.FunctionComponent = () => {
 return (
  <div>
   <RouterProvider router={router} />
  </div>
 );
};

export default App;
