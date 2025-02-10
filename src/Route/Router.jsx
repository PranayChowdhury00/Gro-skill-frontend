import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/SignUpIn/Register";
import Login from "../Pages/SignUpIn/Login";
import Course from "../Pages/Course/Course";
import CourseDetails from "../Pages/Course/CourseDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Cart from "../Pages/Home/Cart/Cart";
import PaymentPage from "../Pages/Home/PaymentPage/PaymentPage";
import Page404 from "../Pages/page404/Page404";
import UserDashboard from "../Pages/Dashboard/UserDashboard/UserDashboard";
import UserProfile from "../Pages/Dashboard/UserDashboard/UserProfile";
import EditProfile from "../Pages/Dashboard/UserDashboard/EditProfile";
import VideoPlayer from "../Pages/Home/VideoPlayer/VideoPlayer";
import MyProgress from "../Pages/Dashboard/UserDashboard/MyProgress";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AdminProfile from "../Pages/Dashboard/AdminDashboard/AdminProfile";
import AddCourse from "../Pages/Dashboard/AdminDashboard/AddCourse";
import ManageCourses from "../Pages/Dashboard/AdminDashboard/ManageCourses ";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import Instructors from "../Pages/Instructor/Instructors";
import BecomeInstructor from "../Pages/Instructor/BecomeInstructor";
import InstructorRequest from "../Pages/Dashboard/AdminDashboard/InstructorRequest";

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
        {
          path:'/course',
          element:<Course></Course>
        },
        {
          path:'/course/:id',
          element:<PrivetRoute>
            <CourseDetails></CourseDetails>
          </PrivetRoute>
        },
        {
          path:'/cart',
          element:<PrivetRoute>
            <Cart></Cart>
          </PrivetRoute>
        },
        {
          path:'/payment',
          element:<PrivetRoute>
            <PaymentPage></PaymentPage>
          </PrivetRoute>
        },
        {
          path:'/videoPlayer',
          element:<VideoPlayer></VideoPlayer>
        },
        {
          path:'/instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'/becomeInstructor',
          element:<PrivetRoute>
            <BecomeInstructor></BecomeInstructor>
          </PrivetRoute>
        },
        {
          path:'UserDashboard',
          element:<PrivetRoute>
            <UserDashboard></UserDashboard>
          </PrivetRoute>,
          children:[
            {
              path:'userProfile',
              element:<UserProfile></UserProfile>
            },
            {
              path:'edit-profile',
              element:<EditProfile></EditProfile>
            },
            {
              path:'progress',
              element:<MyProgress></MyProgress>
            }
          ]
        },
        {
          path:'/adminDashboard',
          element:<PrivetRoute>
            <AdminDashboard></AdminDashboard>
          </PrivetRoute>,
          children:[
            {
              path:'adminProfile',
              element:<AdminProfile></AdminProfile>
            },
            {
              path:'addCourse',
              element:<AddCourse></AddCourse>
            },
            {
              path:'allCourses',
              element:<ManageCourses></ManageCourses>
            },
            {
              path:'manageUsers',
              element:<ManageUsers></ManageUsers>
            },
            {
              path:'instructorRequest',
              element:<InstructorRequest></InstructorRequest>
            }
          ]
          
        }

      ]
    },
    {
      path:'*',
      element:<Page404></Page404>
    }
  ]);

export default router;