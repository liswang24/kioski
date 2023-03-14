import * as React from 'react';
import { Box, Button, Grid, Tabs, Tab, Typography } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import productData from '../productData';
import ProductCarousel from '../Components/ProductCarousel';

function ProductDetails() {
    const [tab, setTab] = React.useState('description');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => { setTab(newValue)};

    const {productId} = useParams();
    const thisProduct = productData.find(prod => prod.id === productId);

    const location = useLocation();
    const discount = location.state === null ? 0 : location.state.discount;

    let navigate = useNavigate();

    const routeToCart = () => {
        navigate(`../Cart`, {state:{prodId:productId, discount:discount}});
    }

    const routeToProducts = () => {
        navigate('../Products', {state:{discount:discount}})
    }
    
    return (
        <Grid 
            container
            direction='column'
            >
            <Grid item container>
                <Button onClick={routeToProducts}>Back</Button>
                <Typography>Product Details</Typography>
                <Button onClick={routeToCart}>Purchase</Button>
            </Grid>
            <Grid item>
                {/* TODO: Get from to productData */}
                <ProductCarousel images={["Image1", "Image2", "Image3"]}/>
            </Grid>
            <Grid item>
                <h1>{thisProduct.name}</h1>
                {/* <h2>{thisProduct.brand}</h2> */}
                {discount ? 
                <>
                  <p /*Crossed out*/>${thisProduct.price.toFixed(2)}</p>
                  <p>${(thisProduct.price - (thisProduct.price * (discount/100))).toFixed(2)}</p>
                </> : <p>${thisProduct.price.toFixed(2)}</p>}
            </Grid>
            <Grid item>
                <Box>
                    <Tabs
                        value={tab}
                        onChange={handleChange}
                    >
                        <Tab value="description" label = "Description" />
                        <Tab value="features" label = "Features" />
                    </Tabs>
                    {tab === "description" && <p>{thisProduct.description}</p>}
                    {tab === "features" && <p>{thisProduct.features}</p>}
                </Box>
            </Grid>
        </Grid>
    );
  }
  
  export default ProductDetails;
  