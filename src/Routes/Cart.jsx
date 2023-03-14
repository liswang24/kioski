import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productData from '../productData';
import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

function Cart() {
  const location = useLocation();
  const discount = location.state === null ? 0 : location.state.discount;
  const productId = location.state.prodId;
  const thisProduct = productData.find(prod => prod.id === productId);
  
  const pst = 0.07;
  const gst = 0.05;

  const savings = (thisProduct.price * discount).toFixed(2);
  const afterSavingsPrice = (thisProduct.price - savings).toFixed(2);
  const total = (afterSavingsPrice * (1 + pst + gst)).toFixed(2);

  let navigate = useNavigate();
  const routeToProducts = () => {
    navigate('../Products', {state:{discount:discount}})
  }
  const routeToPayment = () => {
    navigate(`../Payment`)
  }

  return (
    <>
        <Button 
          startIcon={<ArrowBackIosNewRoundedIcon/>}
          onClick={routeToProducts}
        >Cancel</Button>
        <Button onClick={routeToPayment}>Pay ${total}</Button>
        <h1>Purchase Overview</h1>    
        <Typography>thisProduct.brand</Typography>
        <Typography>thisProduct.name</Typography>
        {discount ? <>
          <p /*Crossed out*/>${thisProduct.price.toFixed(2)}</p>
          <p>${afterSavingsPrice}</p>
        </> : <p>${thisProduct.price.toFixed(2)}</p>}
        <Typography>Subtotal: ${thisProduct.price.toFixed(2)}</Typography>
        {discount ? <Typography>Discount ({discount}%): -${savings}</Typography>:''}
        <Typography>PST (7%): ${(afterSavingsPrice * pst).toFixed(2)}</Typography>
        <Typography>GST (5%): ${(afterSavingsPrice * gst).toFixed(2)}</Typography>
        <Typography>Total: ${total}</Typography>
    </>
  );
}

export default Cart;
  