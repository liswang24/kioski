import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Routes/Home';
import Game from './Routes/Game';
import Cart from './Routes/Cart';
import Dispense from './Routes/Dispense';
import Thanks from './Routes/Thanks';
import Payment from './Routes/Payment';
import Info from './Routes/Info';
import Products from './Routes/Products';
import ProductDetails from './Routes/ProductDetails';
import GameInstructions from './Routes/GameInstructions';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path: "/Game",
    element: <Game />
  },
  {
    path: "/Game/Instructions",
    element: <GameInstructions />
  },
  {
    path: "/Cart",
    element: <Cart />
  },
  {
    path: "/Dispense",
    element: <Dispense />
  },
  {
    path: "/Info",
    element: <Info />
  },
  {
    path: "/Payment",
    element: <Payment />
  },
  {
    path: "/Products",
    element: <Products />
  },
  {
    path: "/Products/:productId",
    element: <ProductDetails />
  },
  {
    path: "/Thanks",
    element: <Thanks />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
