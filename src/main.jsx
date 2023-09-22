import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './component/home/Home';
import About from './component/about/About';
import Users from './component/users/Users';
import UserDetail from './component/user details/UserDetail';
import NotFound from './component/user details/NotFound';
import Contact from './component/contact/Contact';
// import Header from './component/header/Header';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <NotFound></NotFound>,
    children:[
     {
      path: "/about",
      element: <About></About>
     },
     {
      path: "/contact",
      element: <Contact></Contact>
     },
     {
      path: "/users",
      loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
      element: <Users></Users>
    },
    {
      path: "/user/:userId",
      loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetail></UserDetail>
    }
    ]
  },
  
  // {
  //   path: "header",
  //   element: <Header></Header>
  // },
  {
    path: "/chart",
    element:<App></App>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)


