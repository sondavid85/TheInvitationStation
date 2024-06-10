import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import CreateEvent from "./pages/Newevent.jsx";
import Login from "./pages/Login.jsx";
import Events from './pages/Events.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/createevent",
        element: <CreateEvent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
