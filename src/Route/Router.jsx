import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/SignUpIn/Register";

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
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

export default router;