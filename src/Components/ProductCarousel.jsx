import { Box, Button } from '@mui/material';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';

// https://www.npmjs.com/package/react-material-ui-carousel

function ProductCarousel(props) {
    return (
      <Carousel
        navButtonsAlwaysVisible={true}
      >
        { props.images.map( (image, i) => 
          <Box key={i}>
            {image}
          </Box>
        )}
      </Carousel>
    );
  }
  
  export default ProductCarousel;
  