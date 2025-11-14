import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about', 
        element: <AboutPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}
export default App