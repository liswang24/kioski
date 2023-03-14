import * as React from 'react';
import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import ConfirmModal from '../Components/ConfirmModal';
import productData from '../productData';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

function Products() {
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  const location = useLocation();
  const discount = location.state === null ? 0 : location.state.discount;

  let navigate = useNavigate();
  
  const routeToHome = () => {
    let path = `/`;
    navigate(path);
  }

  const products = productData.map(product => {
    return (
      <Grid item key={product.id}>
        <Card>
          <CardActionArea component={RouterLink} to={`/products/${product.id}`} state={{ discount: discount }}>
            {/* <CardMedia /> */}
            <CardContent>
              <Typography>{product.name}</Typography>
              {/* <Typography>{product.brand}</Typography> */}
              {discount ? 
                <>
                  <p /*Crossed out*/>${product.price.toFixed(2)}</p>
                  <p>${(product.price - (product.price * (discount/100))).toFixed(2)}</p>
                </> : <p>${product.price.toFixed(2)}</p>}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

    return (
      <Grid container>
          <p>Discount: {discount}</p>
          <h1>Products</h1>
          <Grid container>
            {products}
          </Grid>
          <Button onClick={ discount ? handleOpenConfirm : routeToHome }>Cancel</Button>
          <ConfirmModal open={openConfirm} handleClose={handleCloseConfirm} confirmAction ={routeToHome}/>
      </Grid>
    );
  }
  
  export default Products;
  