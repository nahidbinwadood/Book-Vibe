import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import Listed_books from './Components/Listed_Books/Listed_books.jsx';
import Pages_to_read from './Components/Pages_To_Read/Pages_to_read.jsx';
import Homepage from './HomePage/Homepage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children:[
      {
        path:'/',
        element:<Homepage></Homepage>,
        loader:()=>fetch('data.json')

      },
      {
        path:'listed_books',
        element:<Listed_books></Listed_books>
      },
      {
        path:'pages_to_read',
        element:<Pages_to_read></Pages_to_read>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
