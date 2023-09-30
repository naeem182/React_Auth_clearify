import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './Components/home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import AuthProvider from './ContexApi/AuthProvider'

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

        path: "/",
        element: <MainLayout></MainLayout>
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
