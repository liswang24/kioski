import { Box, Button } from '@mui/material';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

function ProductCarousel(props) {
    const productImagesPreview = props.images.map(image => (
      <img 
        height='84px' 
        src={require(`../Assets/Products/${image}`)}
        alt="Additional small product preview"
        style={{
          margin: '50px 20px'
        }}
      />
    ))

    return (
      <Carousel
        navButtonsAlwaysVisible={true}
        interval='5000'
        NextIcon={<ArrowForwardIosRoundedIcon sx={{transform: 'scale(3.0)'}}/>}
        PrevIcon={<ArrowBackIosRoundedIcon sx={{transform: 'scale(3.0)'}}/>}
        navButtonsProps={{
          style: {
              backgroundColor: 'transparent',
              color: '#FAE190',
          }
        }} 
        navButtonsWrapperProps={{
          style: {
            bottom: '0',
            top: 'unset',
            height: '180px'
          }
        }}
        IndicatorIcon={productImagesPreview}
      >
        { props.images.map( (image, i) => 
          <Box key={i} 
            display='flex'
            justifyContent='center'
          >
            <img 
              src={require(`../Assets/Products/${image}`)}
              alt="Product"
              height='600px'
            />
          </Box>
        )}
      </Carousel>
    );
  }
  
  export default ProductCarousel;
  