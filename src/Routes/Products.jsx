import * as React from 'react';
import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import ConfirmModal from '../Components/ConfirmModal';
import productData from '../productData';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

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
      <Grid item xs={6} marginTop={18} key={product.id}>
        <Card sx={(theme)=>({backgroundColor: 'rgba(250, 225, 144, 0.6)', borderRadius: '25px', overflow:'visible', height:'320px', marginBottom: '80px'})}>
          <CardActionArea component={RouterLink} to={`/products/${product.id}`} state={{ discount: discount }}>
            <CardContent sx={{paddingTop: '140px', display:'flex', flexDirection:'column'}}>
              <img 
                style={{
                  height:'280px',
                  position:'absolute',
                  top: '-180px',
                  alignSelf:'center',
                }}
                src={require(`../Assets/Products/${product.images[0]}`)}
                alt="Product Preview"
              />
              <Typography variant='h3'>{product.name}</Typography>
              <Typography variant='h5' marginBottom={3}>{product.brand}</Typography>
              {discount ? 
                <div>
                  <Typography display='inline' variant='h4' marginRight={2} sx={(theme) => ({textDecoration:'line-through', textDecorationColor: theme.palette.pink.main})}>${product.price.toFixed(2)}</Typography>
                  <Typography display='inline' variant='h3' sx={(theme) => ({color: theme.palette.pink.main})}>${(product.price - (product.price * (discount/100))).toFixed(2)}</Typography>
                </div> : <Typography variant='h3'>${product.price.toFixed(2)}</Typography>
              }
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

    return (
      <Grid 
        container
        direction="column"
        height="1920px"
        sx={(theme) => ({
          backgroundColor: theme.palette.pink.main
        })}
        overflow='hidden'
        className='no-cursor'
      >
        <Button 
          variant="contained" 
          color='secondary' 
          size='large' 
          startIcon={<ArrowBackIosRoundedIcon sx={{transform: 'scale(2)'}} />} onClick={ discount ? handleOpenConfirm : routeToHome}
          sx={{position: 'absolute', left: '-100px', top: '26px'}}
        >
          Cancel
        </Button>
        <Grid item container alignItems='center' justifyContent='center'>
          <Typography variant='h2' color='secondary' align='center' p={4}>Products</Typography>
        </Grid>
        <Grid 
          item
          container
          backgroundColor='#FFFFFF'
          borderRadius='45px 45px 0px 0px'
          height='1796px'
          p={3}
          paddingTop={12}
        >
          <Grid item container spacing={4}>
            {products}
          </Grid>
          <ConfirmModal open={openConfirm} handleClose={handleCloseConfirm} confirmAction ={routeToHome}/>
        </Grid>
      </Grid>
    );
  }
  
  export default Products;
  