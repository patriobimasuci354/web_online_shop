import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


// import pages
import HomePage from './pages/home';
import ErrorPage from './pages/errorPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage'
import ProductsPage from './pages/productsPage';
import DetailProduct from './pages/detailProductPage';
import CartPage from './pages/cartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  },
  {
    path: '/register',
    element: <RegisterPage></RegisterPage>
  },
  {
    path: '/products',
    element: <ProductsPage></ProductsPage>
  },
  {
    path: '/product/:id',
    element: <DetailProduct></DetailProduct>
  },
  {
    path: 'cart',
    element: <CartPage></CartPage>
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);  
