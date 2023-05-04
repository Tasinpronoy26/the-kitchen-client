import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import Blog from "../Component/Blog/Blog";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import About from "../Component/About/About";

import ChefDetails from "../Component/ChefDetails/ChefDetails";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Error from "../Component/Error/Error";

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
      },
      {
        path: ":id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-kitchen-server-tasinpronoy56-gmailcom.vercel.app/chef/${params.id}`)


      }
    ]

  },
  {
    path: "*",
    element: <Error></Error>
  }

]);

export default router; 