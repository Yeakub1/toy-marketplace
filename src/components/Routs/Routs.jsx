import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            
        },
    ]
  },
]);
export default router;