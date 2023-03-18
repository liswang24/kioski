import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import {ReactComponent as Ground} from '../Assets/Game/game-ground.svg'
import {ReactComponent as Cloud} from '../Assets/Game/game-cloud.svg'
import Logo from '../Assets/Logo.png'
import '../Styles/game-background.css';

function Thanks() {
  let navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [navigate])

  return (
    <Grid
      container 
      alignItems="center"
      direction="column"
      height="1920px"
      sx={(theme) => ({
        backgroundColor: theme.palette.blue.main
      })}
      overflow='hidden'
      >
        <Grid
          item
          position='absolute'
          container
          overflow='hidden'
          height='1400px'
        > 
          <div class="cloud" id="cloud2">
            <Cloud/>
          </div>
          <div class="cloud" id="cloud4">
            <Cloud/>
          </div>
          <div class="cloud" id="cloud5">
            <Cloud/>
          </div>
          <div class="cloud" id="cloud6">
            <Cloud/>
          </div>
          <div class="cloud" id="cloud7">
            <Cloud/>
          </div>
        </Grid>
        <Grid 
          item
          container
          alignItems='end'
          pl={4}
          xs={3}
          zIndex='10'
        >
          <Typography variant='h2'>Thank you for using</Typography>
        </Grid>
        <Grid 
          item 
          xs={2} 
          container
          alignItems='start'
          pl={4}
          zIndex='10'
        >
          <img src={Logo} alt="Kioski logo" width='70%' />
        </Grid>
        <Grid 
          item 
          xs={2} 
          container 
          direction='column' 
          alignItems='center'
          spacing={6}
        >
        </Grid>
        <Grid 
          item
          container
          xs={2}
          zIndex='5'
        >
          <div id="dino" className="dino-background"></div>
          <div id="cactus"></div>
        </Grid>
        <Grid
          xs={3} 
          item 
          container
          position='absolute'
          bottom='0px'
        >
          <Ground 
            width='100%'
            height='100%'
          />
        </Grid>
    </Grid>
  );
}

export default Thanks;
  