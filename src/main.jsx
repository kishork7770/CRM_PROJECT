import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login.jsx'
import Dummy from './pages/dummy.jsx'
import Register from './pages/register.jsx'
import Header from './components/header.jsx'
import Home from './pages/home.jsx'
import Leads from './pages/leads.jsx'
import CreateLead from './pages/createLead.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/dummy',
        element:<Dummy/>
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/leads',
        element:<Leads/>
      },
      {
        path:'/createLead',
        element:<CreateLead/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
