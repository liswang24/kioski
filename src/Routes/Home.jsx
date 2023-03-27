import * as React from 'react';
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import {ReactComponent as DiscountSticker} from '../Assets/discount-sticker.svg'
import {ReactComponent as Ground} from '../Assets/Game/game-ground.svg'
import {ReactComponent as Cloud} from '../Assets/Game/game-cloud.svg'
import Logo from '../Assets/Logo.png'
import '../Styles/game-background.css';

function Home() {
  let navigate = useNavigate();

  React.useEffect(() => {
    window.localStorage.setItem('hideInstructions', false);
  },[])

  const routeToPath = (path) => {
    navigate(path);
  }

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
      className='no-cursor'
      >
        <Grid 
          item
          xs={3}
          container
          padding={8}
          zIndex="5"
        >
          <div style={{display: 'flex', paddingLeft: '600px'}}>
            <DiscountSticker 
              width='100%' 
              height='400px'
            />
          </div>
          
        </Grid>
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
          xs={2} 
          container
          justifyContent='center'
          alignItems='center'
          zIndex='10'
        >
          <img src={Logo} alt="Kioski logo" width='85%' />
        </Grid>
        <Grid 
          item 
          xs={2} 
          container 
          direction='column' 
          alignItems='center'
          spacing={6}
        >
          <Grid item>
            <Button 
              size='large' 
              onClick={() => routeToPath(`Game`)}
              sx={(theme) => ({
                backgroundColor: theme.palette.pink.main
              })}
            >
              Play Game
            </Button>
          </Grid>
          <Grid item>
            <Button 
              size='large' 
              onClick={() => routeToPath(`Products`)} 
              sx={(theme) => ({
                color: 'black',
                backgroundColor: theme.palette.green.main,
              })}
            >
              Purchase
            </Button>
          </Grid>
          <Grid 
            item
            position='absolute'
            bottom='160px' 
            zIndex='10'
          >
            <Button 
              size='small' 
              onClick={() => routeToPath(`Info`)} 
              startIcon={<QuestionMarkRoundedIcon />}
              sx={{ textTransform: 'none' }}
            >
              How it works
            </Button>
          </Grid>
        </Grid>
        <Grid 
          item
          container
          xs={2}
          zIndex='5'
        >
          <div id="dino" className="dino-background"></div>
          <div id="cactus" className="cactus-background"></div>
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

export default Home;