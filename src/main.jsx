import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import Listed_books from './Components/Listed_Books/Listed_books.jsx';
import Pages_to_read from './Components/Pages_To_Read/Pages_to_read.jsx';
import Homepage from './HomePage/Homepage.jsx';
import Book_details from './HomePage/Books/Book_Details/Book_details.jsx';
import ReadBooks from './Components/Listed_Books/Read_Books/ReadBooks.jsx';
import WishlistBooks from './Components/Listed_Books/Wishlist_Books/WishlistBooks.jsx';
import  { Toaster } from 'react-hot-toast';
import ErrorPage from './Components/ErrorPage/Error.jsx';
import ArrayItems from './Components/Pages_To_Read/ArrayItems.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
        loader: () => fetch('data.json')

      },
      {
        path: 'book_details/:bookId',
        element: <Book_details></Book_details>,
        loader: () => fetch(`data.json`)
      },
      {
        path: 'listed_books/book_details/:bookId',
        element: <Book_details></Book_details>,
        loader: () => fetch(`data.json`)
      },
      {
        path: 'listed_books/wishlist_books/book_details/:bookId',
        element: <Book_details></Book_details>,
        loader: () => fetch(`data.json`)
      },
      {
        path: 'listed_books',
        element: <Listed_books></Listed_books>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch(`data.json`),
          },
          {
            path: 'wishlist_books',
            element: <WishlistBooks></WishlistBooks>,
            loader: () => fetch(`data.json`)
          }
        ]
      },
      {
        path: 'pages_to_read',
        element: <ArrayItems></ArrayItems>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
)
