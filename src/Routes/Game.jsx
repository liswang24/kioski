import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../Components/ConfirmModal';
import '../Styles/game.css';

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
    if (!jump) {
      setJump(true);
      setTimeout(function() {
        setJump(false);
      }, 300);
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
      
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // TODO: modify positions
        setGameOver(true);
      }
      else if (cactusLeft === -19) { //TODO: need to tweak
        setScore((prevScore) => prevScore + 1);        
      }
    }, 10);

    return () => clearInterval(isAlive);
  }, []);

  const getDiscount = (score) => score >= 30 ? 20 : score >= 20 ? 15 : 10;

  return (
    <>
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
                    <li>TODO:score = 20% off</li>
                    <li>TODO:score = 15% off</li>
                    <li>TODO:score = 10% off</li>
                    <li>TODO:score = 5% off</li>
                    <li>Less than TODO:score = No discount</li>
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
      {/* TODO: Clouds for visual flair */}
      {(score >= 10) && 
        <>
          <Typography>Discount Unlocked:</Typography>
          <Typography>{getDiscount(score)}%</Typography>
        </>
      }
      <Typography>Score</Typography>
      <Typography sx={(score === 10 || score === 20 || score === 30 )? {color: 'red'}: {}}>{score}</Typography>
      {gameOver && 
        <Box>
          <Typography>{score < 10 ? 'GAME OVER' : 'CONGRATS'}</Typography>
          {score < 10 ? <Typography>You did not unlock any discounts</Typography> : <>
            <Typography>You have unlocked</Typography>
            <Typography>{getDiscount(score)}% off</Typography>
            <Typography>of your purchase</Typography>
          </>}
          {score >= 10 && <Button onClick={routeToDiscountedProducts}>Use Discount</Button>}
          <Button onClick={score >= 10 ? handleOpenConfirmReset: resetGame}>Play Again</Button>
          <ConfirmModal
            open={confirmReset}
            handleClose={handleCancelReset}
            confirmAction={resetGame}
            />
          <Button onClick={score >= 10 ? handleOpenConfirmHome : () => routeToPath(`../`)}>Home</Button>
          <ConfirmModal
            open={confirmHome}
            handleClose={handleCancelHome}
            confirmAction={() => routeToPath(`../`)}
            />
         
        </Box>
      }
      <div className="game" onClick={handleTap}>
          <div id="dino" className={jump ? 'jump' : ''} style={{ animationPlayState: startGame && !gameOver ? 'running' : 'paused'}}></div>
          <div id="cactus" style={{ animationPlayState: startGame && !gameOver ? 'running' : 'paused'}}></div>
      </div>
    </>
  );
}

export default Game;
