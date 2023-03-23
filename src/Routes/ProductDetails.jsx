import * as React from 'react';
import { Box, Button, Grid, Tabs, Tab, Typography, IconButton } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import productData from '../productData';
import ProductCarousel from '../Components/ProductCarousel';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

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
            p={6}
            className='no-cursor'
        >
            <Grid item container justifyContent='space-between' mt={1} mb={8}>
                <IconButton
                    onClick={routeToProducts}
                    sx={(theme) => ({
                        backgroundColor: theme.palette.pink.main,
                        width: '64px'
                    })}
                >
                    <ArrowBackIosRoundedIcon color='secondary' sx={{transform: 'scale(2)'}}/>
                </IconButton>
                <Typography variant='h2'ml={18}>Product Details</Typography>
                <Button 
                    sx={(theme) => ({
                        backgroundColor: theme.palette.green.main,
                        color: 'black'
                    })}
                    onClick={routeToCart}
                    endIcon={<ShoppingCartCheckoutRoundedIcon sx={{transform: 'scale(1.6)', marginLeft: '10px'}}/>}
                    disabled={thisProduct.id !== '2'}
                >
                    {thisProduct.id === '2' ? 'Purchase' : 'Out of stock'}
                </Button>
            </Grid>
            <Grid item>
                <ProductCarousel images={thisProduct.images}/>
            </Grid>
            <Grid item container mt={4}>
                <Grid item xs={8}>
                    <Typography variant='h2' mb={2}>{thisProduct.name}</Typography>
                    <Typography variant='h5'>{thisProduct.brand}</Typography>
                </Grid>
                <Grid item xs={4} container justifyContent='end' alignContent='end'>
                {discount ? 
                <>
                  <Typography display='inline' variant='h4' marginRight={2} sx={(theme) => ({textDecoration:'line-through', textDecorationColor: theme.palette.pink.main, lineHeight: '61px'})}>${thisProduct.price.toFixed(2)}</Typography>
                  <Typography display='inline' variant='h2' sx={(theme) => ({color: theme.palette.pink.main})}>${(thisProduct.price - (thisProduct.price * (discount/100))).toFixed(2)}</Typography>
                </> : <Typography variant='h2'>${thisProduct.price.toFixed(2)}</Typography>
                }
                </Grid>
            </Grid>
            <Grid item mt={8}>
                <Tabs
                    value={tab}
                    onChange={handleChange}
                >
                    <Tab 
                        value="description" 
                        label = "Description"
                    />
                    <Tab value="features" label = "Features" />
                </Tabs>
                {tab === "description" && <Typography p={4}>{thisProduct.description}</Typography>}
                {tab === "features" && 
                    <ul style={{padding: '18px 50px'}}>
                        {thisProduct.features.map((feature) => <li>{<Typography>{feature}</Typography>}</li>)}
                    </ul>
                }
            </Grid>
        </Grid>
    );
  }
  
  export default ProductDetails;
  