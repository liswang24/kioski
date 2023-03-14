import * as React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Info() {
  let navigate = useNavigate();

  const routeToHome = () => {
    let path = `/`
    navigate(path);
  }

    return (
      <>
        <IconButton
          onClick={routeToHome}
        >
          <CloseRoundedIcon />
        </IconButton>
        <h1>How to information here</h1>
      </>
    );
  }
  
  export default Info;
  