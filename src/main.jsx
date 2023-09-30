import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './Components/home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import AuthProvider from './ContexApi/AuthProvider'
import Order from './Components/Order/Order'
import PrivateRoutes from './Components/Private/PrivateRoutes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {

        path: "/",
        element: <Home></Home>
      },
      {

        path: "/reg",
        element: <Register></Register>
      },
      {

        path: "/login",
        element: <Login></Login>
      },
      {

        path: "/orders",
        element: <PrivateRoutes><Order></Order></PrivateRoutes>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
