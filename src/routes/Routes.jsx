import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayout from "../layouts/ChefLayout";
import Chef from "../pages/Chef";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><Chef></Chef></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-jmm6.vercel.app/chefs/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;