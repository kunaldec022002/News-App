import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './Views/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Contact from './Views/Contact/Contact';
import LogIn from './Views/LogIn/LogIn';
import SignUp from './Views/SignUp/SignUp';
import About from './Views/About/About';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/login',
    element:<LogIn/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
