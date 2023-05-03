import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import Blog from "../Component/Blog/Blog";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import About from "../Component/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

export default router; 