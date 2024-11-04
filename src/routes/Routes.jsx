import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ErrorPage from "../pages/ErrorPage";
import AllProducts from "../Components/Home/AllProducts";
import Laptops from "../Components/Home/Laptops";
import Phones from "../Components/Home/Phones ";
import Accessories from "../Components/Home/Accessories";
import SmartWatches from "../Components/Home/SmartWatches";
import MacBook from "../Components/Home/MacBook";
import Iphone from "../Components/Home/Iphone";
import CategoryCard from "../Components/Home/CategoryCard";
import ProductDetails from "../Components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/", // Removed the leading slash to make it relative
                element: <Home />,
                children: [
                  // Default route for "home"
                  {
                    path:"/category/:category",
                    element:<CategoryCard/>,
                    loader: ()=> fetch('../products.json'),
                   
                 },
                  {
                    path:"/",
                    element:<CategoryCard/>,
                    loader: ()=> fetch('../products.json'),
                   
                 },
                 
                ],
            },
            {
                path:"/dashboard",
                element: <Dashboard/>
            },
            {
                path:"/statistics",
                element : <Statistics/>
            },
            {
                path:"/allproducts",
                element : <AllProducts/>
            },
            {
                path:"/productdetails/:id",
                element:<ProductDetails/>,
                loader: ()=> fetch('../products.json'),
            }
        ]
    },
    
])