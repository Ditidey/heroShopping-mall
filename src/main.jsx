import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import ProductsCart from './components/ProductsCart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'shop',
        element:<Shop></Shop>,
        loader: ()=>fetch('products.json')
      },
      {
        path: 'cart',
        element: <ProductsCart></ProductsCart>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
