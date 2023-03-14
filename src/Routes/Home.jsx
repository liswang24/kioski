import * as React from 'react';
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';

function Home() {
  let navigate = useNavigate();

  const routeToPath = (path) => {
    navigate(path);
  }

  return (
    <Grid 
      container 
      alignContent="center"
      direction="column"
      >
        <Grid item>Discount Sticker</Grid>
        <Grid item>KIOSKI LOGO</Grid>
        <Grid item><Button size='large' onClick={() => routeToPath(`Game/Instructions`)} >Play Game</Button></Grid>
        <Grid item><Button size='large' onClick={() => routeToPath(`Products`)} >Purchase</Button></Grid>
        <Grid item><Button size='small' onClick={() => routeToPath(`Info`)} startIcon={<QuestionMarkRoundedIcon />}>How it works</Button></Grid>
    </Grid>
  );
}

export default Home;
