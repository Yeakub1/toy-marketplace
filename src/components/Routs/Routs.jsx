import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/Error/ErrorPage";
import Home from "../Home/Home/Home";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/SignUp/Signup";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoutes from "./PrivateRoutes";
import AddToy from "../Pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/alltoys",
        element: (
          <PrivateRoutes>
            <AllToys></AllToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Signup></Signup>,
      },
    ],
  },
]);
export default router;
