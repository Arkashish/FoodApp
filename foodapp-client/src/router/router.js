import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../Components/Signup";
import UpadateProfile from "../pages/dashboard/UpdateProfile";
import PrivateRouter from "../layout/PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <PrivateRouter> <Menu /></PrivateRouter>
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/update-profile',
                element: <UpadateProfile />
            }
        ]
    }
])

export default router;