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
import Contact from './component/contact/contact';
// import Header from './component/header/Header';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
     {
      path: "/about",
      element: <About></About>
     },
     {
      path: "/contact",
      element: <Contact></Contact>
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


