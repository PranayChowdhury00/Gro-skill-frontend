import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/SignUpIn/Register";
import Login from "../Pages/SignUpIn/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },

      ]
    },
  ]);

export default router;