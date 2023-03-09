import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import productData from '../productData';

function ProductDetails() {
    const {productId} = useParams();
    const thisProduct = productData.find(prod => prod.id === productId);

    let navigate = useNavigate();
    // TODO: pass price info etc -> do it similarly to product cards
    const routeToCart = () => {
        let path = `../Cart`;
        navigate(path);
    }
    
    return (
        <Grid 
            container
            direction='column'
            >
            <Grid item container>
                <Button>Back</Button>
                <Typography>Product Details</Typography>
                <Button onClick={routeToCart}>Purchase</Button>
            </Grid>
            <Grid item>
                [Additional images carousel]
            </Grid>
            <Grid item>
                <h1>{thisProduct.name}</h1>
                {/* <h2>{thisProduct.brand}</h2> */}
                <p>Price: ${thisProduct.price}</p>
            </Grid>
            <Grid item>
                <p>[TOGGLE description/features]</p>
                <p>{thisProduct.description}</p>
                <p>{thisProduct.features}</p>
            </Grid>
        </Grid>
    );
  }
  
  export default ProductDetails;
  