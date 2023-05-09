import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Homepage/Home";
import About from "../Pages/Aboutpage/About";
import LongAbout from "../Pages/AxiosPages/LongAbout";
/////////////////Page////////////////////


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/about",
        element: <About />
    },
    {
        path: "/:id",
        element: <LongAbout />
    }


]);
export default router;