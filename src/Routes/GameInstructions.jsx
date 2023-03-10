import { Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function GameInstructions() {
    let navigate = useNavigate();

    const routeToGame = () => {
        let path = `../Game`
        navigate(path);
    }
    return (
      <>
            {/* TODO: X button */}
          <h1>Game Instructions</h1>
          <Button onClick={routeToGame}>Play</Button>
      </>
    );
  }
  
  export default GameInstructions;
  