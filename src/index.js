import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css';
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

// Using HashRouter for gh-pages compatability 
const router = createHashRouter([
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
