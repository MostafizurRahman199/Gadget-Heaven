import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/home",
                element: <Home/>
            },
            {
                path:"/dashboard",
                element: <Dashboard/>
            },
            {
                path:"/statistics",
                element : <Statistics/>
            }
        ]
    },
    
])