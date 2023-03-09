import * as React from 'react';
import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import ConfirmModal from '../Components/ConfirmModal';
import productData from '../productData';
import { Link as RouterLink } from 'react-router-dom';

function Products() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const products = productData.map(product => {
    return (
      <Grid item key={product.id}>
        <Card>
          <CardActionArea component={RouterLink} to={`/products/${product.id}`}>
            {/* <CardMedia /> */}
            <CardContent>
              <Typography>{product.name}</Typography>
              {/* <Typography>{product.brand}</Typography> */}
              <Typography>${product.price}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

    return (
      <Grid container>
          <h1>Products</h1>
          <Grid container>
            {products}
          </Grid>
          <Button onClick={handleOpen}>Cancel (prompt are you sure modal)</Button>
          <ConfirmModal open={open} handleClose={handleClose}/>
      </Grid>
    );
  }
  
  export default Products;
  