import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
      // {
      //   path: '/About',
      //   element: <About />,
      // },
      // {
      //   path: '/Portfolio',
      //   element: <Portfolio />,
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
      // {
      //   path: '/Resume',
      //   element: <Resume />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
