import { Box } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  let navigate = useNavigate();

  const routeToDispense = () => {
      //TODO: navigate to dispense items
    // navigate(path);
  }

    return (
      // TODO: Implement better solution than button component
      <Box component="button" onClick={routeToDispense}>
        <h1>Prompt Payment Here</h1>
        {/* TODO: on tap route to next */}
      </Box>
    );
  }
  
  export default Payment;
  