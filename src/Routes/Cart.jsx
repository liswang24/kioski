import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productData from '../productData';
import { Button, Divider, Grid, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

function Cart() {
  const location = useLocation();
  const discount = location.state === null ? 0 : location.state.discount;
  const productId = location.state.prodId;
  const thisProduct = productData.find(prod => prod.id === productId);
  
  const pst = 0.07;
  const gst = 0.05;

  const savings = (thisProduct.price * (discount * 0.01)).toFixed(2);
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
    <Grid
      container
      direction='column'
      height="1920px"
      sx={(theme) => ({
        backgroundColor: theme.palette.purple.main
      })}
      overflow='hidden'
      className='no-cursor'
    >
      <Grid item container justifyContent='space-between' alignItems='center' p={6} pl={1} pr={3}>
        <Button 
          startIcon={<ArrowBackIosNewRoundedIcon sx={{transform: 'scale(2)'}}/>}
          onClick={routeToProducts}
          variant="contained" 
          color='secondary' 
          size='large' 
          sx={{width: '200px'}}
        >
          Cancel
        </Button>
        <Button 
          size='large' 
          onClick={routeToPayment}
          sx={(theme) => ({
            width: '300px',
            backgroundColor: theme.palette.yellow.main,
            color: 'black'
          })}
        >
          Pay ${total}
        </Button>
      </Grid>
      <Grid 
        item 
        container 
        backgroundColor='#FFFFFF'
        borderRadius='45px 45px 0px 0px'
        pb="67px"
      >
        <Grid item container p={4} mt={4}>
          <Typography variant='h2' width='100%' align='center'>Purchase Overview</Typography>
        </Grid>
        <Grid item xs={12} p={6} pb={2}>
          <Typography variant='h4' color='rgb(0,0,0,0.6)'>{thisProduct.brand}</Typography>
        </Grid>
        <Grid item xs={12} p={6} pt={0} container direction='row' justifyContent='space-between'>
          <Typography variant='h2'>{thisProduct.name}</Typography>
          {discount ? 
            <div style={{display: 'flex', alignItems:'end'}}>
              <Typography display='inline' variant='h4' marginRight={2} sx={(theme) => ({textDecoration:'line-through', textDecorationColor: theme.palette.pink.main})}>${thisProduct.price.toFixed(2)}</Typography>
              <Typography display='inline' variant='h3' sx={(theme) => ({color: theme.palette.pink.main})}>${afterSavingsPrice}</Typography>
            </div> : <Typography variant='h3' sx={{display: 'flex', alignItems:'end'}}>${thisProduct.price.toFixed(2)}</Typography>
          }
        </Grid>
        <Grid 
          item 
          container
          justifyContent='center'
          xs={12}
          backgroundColor='rgb(174,221,244,0.5)'
          borderRadius='25px'
          padding='80px 0'
          margin='60px 160px'
        >
          <img 
            height='600px'
            src={require(`../Assets/Products/${thisProduct.images[0]}`)}
            alt="Product"
            style={{margin: 'auto'}}
          />
        </Grid>
        <Grid item xs={12} p={6}>
          <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px'}}>
            <Typography>Subtotal:</Typography>
            <Typography>${thisProduct.price.toFixed(2)}</Typography>
          </div>
          <Divider />
          {discount ? 
          <>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px'}}>
              <Typography>Discount ({discount}%):</Typography>
              <Typography>-${savings}</Typography>
            </div>
            <Divider />
          </>
          :''}
          <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px'}}>
            <Typography>PST (7%):</Typography>
            <Typography>${(afterSavingsPrice * pst).toFixed(2)}</Typography>
          </div>
          <Divider />
          <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px'}}>
            <Typography>GST (5%):</Typography>
            <Typography>${(afterSavingsPrice * gst).toFixed(2)}</Typography>
          </div>
          <Divider />
          <Typography variant='h2' mt={3} mb={6}>Total: ${total}</Typography>
        </Grid>
      </Grid>     
    </Grid>
  );
}

export default Cart;
  