import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "@/pages/LoginPage.tsx";
import {RegisterPage} from "@/pages/RegisterPage.tsx";
import {FoodListPage} from "@/pages/FoodListPage.tsx";
import FoodDetail from "@/pages/FoodDetail.tsx";
import {OrderHistory} from "@/pages/OrderHistory.tsx";
import CartPage from "@/pages/CartPage.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "food",
                children: [
                    {
                      index: true,
                      element: <FoodListPage />
                    },
                    {
                        path: ":foodId",
                        element: <FoodDetail />
                    },
                ]
            },
            {
                path: "order/history",
                element: <OrderHistory />
            },
            {
                path: "cart",
                element: <CartPage />
            },
            {
                path: "recipe/favorit",
                element: "My Favorite Recipe"
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>,
)
