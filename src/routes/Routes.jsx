import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ErrorPage from "../pages/ErrorPage";
import CategoryCard from "../Components/Home/CategoryCard";
import ProductDetails from "../Components/ProductDetails";
import DisplayDashboard from "../Components/Dashboard/DisplayDashboard";
import Allproducts from "../pages/Allproducts";
import TitleWrapper from "../Components/TitleWrapper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/", // Removed the leading slash to make it relative
                element: (
                    <TitleWrapper title="Home - Gadget Haven">
                        <Home />
                    </TitleWrapper>
                ),
                children: [
                  // Default route for "home"
                  {
                    path:"/category/:category",
                    element:(
                        <TitleWrapper title="Category - Gadget Haven">
                            <CategoryCard />
                        </TitleWrapper>
                    ),
                    loader: ()=> fetch('../products.json'),
                   
                 },
                  {
                    path:"/",
                    element:(
                        <TitleWrapper title="All Products - Gadget Haven">
                            <CategoryCard />
                        </TitleWrapper>
                    ),
                    loader: ()=> fetch('../products.json'),
                   
                 },
                 
                ],
            },
            {
                path:"/dashboard",
                element: (
                    <TitleWrapper title="Dashboard - Gadget Haven">
                        <Dashboard />
                    </TitleWrapper>
                ),
               
            },
            {
                path:"/statistics",
                element : (
                    <TitleWrapper title="Statistics - Gadget Haven">
                        <Statistics />
                    </TitleWrapper>
                ),
            },
            {
                path:"/allproducts",
                element :  (
                    <TitleWrapper title="All Products - Gadget Haven">
                        <Allproducts />
                    </TitleWrapper>
                ),
                loader: ()=> fetch('../products.json'),
            },
            {
                path:"/productdetails/:id",
                element:(
                    <TitleWrapper title="Product Details - Gadget Haven">
                        <ProductDetails />
                    </TitleWrapper>
                ),
                loader: ()=> fetch('../products.json'),
            }
        ]
    },
    
])