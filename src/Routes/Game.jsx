import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../Components/ConfirmModal';
import '../Styles/game.css';
import {ReactComponent as Ground} from '../Assets/Game/game-ground.svg'
import {ReactComponent as Cloud} from '../Assets/Game/game-cloud.svg'

// Adapted from "https://github.com/mdbootstrap/knowledge-base/tree/main/JS/games/dino-game"

function Game(props) {
  let navigate = useNavigate();

  const routeToPath = (path) => {
    navigate(path);
  }

  const routeToDiscountedProducts = () => {
    navigate('../Products', {state:{discount:getDiscount(score)}})
  }

  const [jump, setJump] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [startGame, setStartGame] = React.useState(false);
  const [confirmReset, setConfirmReset] = React.useState(false);
  const [confirmHome, setConfirmHome] = React.useState(false);
  const hideInstructions = window.localStorage.getItem('hideInstructions');
  const [showInstructions, setShowInstructions] = React.useState(true);

  const handleTap = event => {
    if (!jump && startGame) {
      setJump(true);
      const cactusLocation = parseInt(window.getComputedStyle(document.getElementById("cactus")).getPropertyValue("left"));
      
      setTimeout(function() {
        setJump(false);
        if (cactusLocation > 40 && cactusLocation < 260) { 
            setScore((prevScore) => prevScore + 1)
        } 
      }, 2000);
    }
  }

  const handleStart = () => setStartGame(true);
  const handleOpenConfirmReset = () => setConfirmReset(true);
  const handleCancelReset = () => setConfirmReset(false);
  const handleOpenConfirmHome = () => setConfirmHome(true);
  const handleCancelHome = () => setConfirmHome(false);
  const handleCloseInstructions = () => setShowInstructions(false);

  const resetGame = () => {
    window.localStorage.setItem('hideInstructions', true)
    window.location.reload();
  }

  React.useEffect(() => {
    const isAlive = setInterval(() => {
      let dinoTop = parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(document.getElementById("cactus")).getPropertyValue("left"));
      
      if (cactusLeft < -40 && cactusLeft > -260 && dinoTop >= -24) {
        setGameOver(true);
      }
    }, 10);

    return () => clearInterval(isAlive);
  }, []);

  const getDiscount = (score) => score >= 30 ? 20 : score >= 20 ? 15 : score >= 10 ? 10 : score >= 5 ? 5 : 0;

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
      onClick={handleTap}
    >
      <Modal
        open={!startGame}
        onClose={showInstructions ? (hideInstructions==='true' ? handleStart : '') : handleStart}
      >
        <>
          <Box 
            display={showInstructions ? (hideInstructions==='true' ? '' : 'none') : ''}
          >
            <Typography 
              id='game-font' 
              width='100%'
              align='center'
              mt={100}
              sx={{
                fontSize: '60px', 
                color: 'white',
                textShadow: '-4px 0 black, 0 4px black, 4px 0 black, 0 -4px black'
              }}
            >
              Tap to start
            </Typography>
          </Box> 
          <Box 
            border='solid black'
            borderRadius='25px'
            backgroundColor='white'
            width='800px'
            margin='auto'
            mt={60}
            p={8}
            display={showInstructions ? (hideInstructions==='true' ? 'none' : '') : 'none'}
          >
            <Typography variant='h3' id='game-font' sx={(theme)=>({color:theme.palette.pink.main})}>Instructions</Typography>
            <Typography>
              <ol>
                <li>Tap anywhere on the screen to start the game</li>
                <li>Tap anywhere to make your dino jump.</li>
                <li>Avoid hitting the cactus to survive.</li>
                <li>The higher your score, the greater the discount you will get!
                  <ul style={{marginTop: '20px'}}>
                    <li>30 points = 20% off</li>
                    <li>20 points = 15% off</li>
                    <li>10 points = 10% off</li>
                    <li>5 points = 5% off</li>
                    <li>Less than 5 points = No discount</li>
                  </ul>
                </li>
              </ol>
            </Typography>
            <Grid container direction='column'>
              <Button 
                size='large'
                onClick={handleCloseInstructions}
                sx={(theme) => ({
                  backgroundColor: theme.palette.green.main,
                  color: 'black',
                  margin: '40px auto 30px'
                })}
              >
                Play Game
              </Button>
              <Button 
                size='medium' 
                onClick={()=>(routeToPath('../'))}
                sx={(theme) => ({
                  backgroundColor: 'rgb(0,0,0,0.3)',
                  width: '240px',
                  margin: 'auto'
                })}
              >
                Return Home
              </Button>
            </Grid>
        </Box>
      </>
      </Modal>
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
          xs={7}
          p={4}
          alignContent='start'
        >
          <Grid item container justifyContent='end' height='100px'>
          {(score >= 5) && 
            <Grid item direction='column'>
              <Typography id='game-font' fontSize='20px'>Discount Unlocked:</Typography>
              <Typography id='game-font' align='center'>{getDiscount(score)}%</Typography>
            </Grid>
          }
          </Grid>
          <Grid item container justifyContent='center' m={4}>
            <Typography 
              id='game-font'
              sx={{
                fontSize: '52px', 
              }}
            >
              Score
            </Typography>
          </Grid>
          <Grid item container justifyContent='center' 
          >
            <Typography
              id='game-font'
              sx={(theme) => ({
                fontSize: '72px', 
                color: `${(score === 5 || score === 10 || score === 20 || score === 30 ) ? theme.palette.yellow.main : 'white'}`,
                textShadow: `-4px 0 black, 0 4px black, 4px 0 black, 0 -4px black ${(score===5 || score === 10 || score === 20 || score === 30 ) ? `,0px 0px 50px ${theme.palette.yellow.main}` : ''}`
              })}
            >{score}</Typography>
          </Grid>
        </Grid>
        <Grid 
          item 
          container
          xs={2}
          zIndex='5'
        >
          <div id="dino" className={jump ? 'jump' : ''} style={{ animationPlayState: startGame && !gameOver ? 'running' : 'paused'}}></div>
          <div id="cactus" className='cactus-game' style={{ animationPlayState: startGame && !gameOver ? 'running' : 'paused'}}>
      </div>
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
      {gameOver && 
        <Box
          position='absolute'
          left='0'
          width= '100%'
          height='1920px'
          backgroundColor='rgb(0,0,0,0.5)'
          justifyContent='center'
          alignItems='center'
          display='flex'
          flexDirection='column'
          zIndex={10}
        >
          <Typography id='game-font' 
            sx={(theme) => ({
              fontSize: '72px', 
              color: 'white',
              textShadow: `-4px 0 black, 0 4px black, 4px 0 black, 0 -4px black`
            })}>{score < 5 ? 'GAME OVER' : 'CONGRATS'}</Typography>
          {score < 5 ? <Typography>You did not unlock any discounts</Typography> : <>
            <Typography>You have unlocked</Typography>
            <Typography 
              id='game-font'
              sx={(theme) => ({
                margin: '20px',
                fontSize: '60px', 
                color: 'white',
                textShadow: `-4px 0 black, 0 4px black, 4px 0 black, 0 -4px black`
              })}
            >{getDiscount(score)}% off</Typography>
            <Typography>of your purchase</Typography>
          </>}
          {score >= 5 && <Button size='large' onClick={routeToDiscountedProducts} sx={(theme) => ({marginTop:'40px', backgroundColor: theme.palette.green.main, color: 'black'})}>Use Discount</Button>}
          <Button size='large' onClick={score >= 5 ? handleOpenConfirmReset: resetGame} sx={(theme) => ({margin:'40px', backgroundColor: theme.palette.yellow.main, color: 'black'})}>Play Again</Button>
          <ConfirmModal
            open={confirmReset}
            handleClose={handleCancelReset}
            confirmAction={resetGame}
            />
          <Button size='large' onClick={score >= 5 ? handleOpenConfirmHome : () => routeToPath(`../`)} sx={(theme) => ({backgroundColor: theme.palette.purple.main, color: 'black'})}>Home</Button>
          <ConfirmModal
            open={confirmHome}
            handleClose={handleCancelHome}
            confirmAction={() => routeToPath(`../`)}
            />
        </Box>
      }
    </Grid>
  );
}

export default Game;
