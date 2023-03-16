import * as React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from '../Assets/kioski-logo.svg'
import { Looks3, Looks4, LooksOne, LooksTwo } from '@mui/icons-material';

function Info() {
  let navigate = useNavigate();

  const routeToHome = () => {
    let path = `/`
    navigate(path);
  }

    return (
      <Box
        container
        sx={(theme) => ({
          backgroundColor: theme.palette.yellow.main
        })}
        padding={4}
        display='flex'
        flexDirection='column'
        height='1856px'
        overflow='hidden'
      >
        <div style={{display:'flex', justifyContent:'end', marginBottom:'50px'}}>
          <IconButton
            onClick={routeToHome}
            sx={{transform: 'scale(2.4)'}}
          >
            <CloseRoundedIcon color='primary' />
          </IconButton>
        </div>
        <div style={{display:'flex', alignItems:'center', padding:'30px 0px'}}>
          <Typography variant='h2'>How does</Typography>
          <Logo height='54px' width='380px'/>
          <Typography variant='h2'>work?</Typography>
        </div>
        <Typography variant='body2'>Kioski offers our customers a simple and fun way to purchase toys! Customers can either purchase directly from the machine or play a game for a chance to recieve a discount on products sold in the machine.</Typography>
        <LooksOne sx={{transform: 'scale(3)', width:'100%', padding:'60px 0 50px'}}/>
        <Typography variant='body1' align='center'>Choose to purchase directly or play for a discount.</Typography>
        <ul style={{border:'dotted black', margin:'40px 40px 20px', padding:'40px 50px',fontSize:'24px'}}>
          <li style={{marginBottom:'20px'}}>Games can be played an unlimited amount of times.</li>
          <li>A discount* of up to 20% off your purchase can be unlocked based on the score achieved in the mini game.</li>
        </ul>
        <LooksTwo sx={{transform: 'scale(3)', width:'100%', padding:'60px 0 50px'}}/>
        <Typography variant='body1' align='center'>Select the product you would like to purchase. </Typography>
        <Typography variant='body1' align='center' paddingBottom='20px'>(Any discounts achieved will be automatically applied and reflected in the listed product price.)</Typography>
        <Looks3 sx={{transform: 'scale(3)', width:'100%', padding:'60px 0 50px'}}/>
        <Typography variant='body1' align='center' paddingBottom='20px'>Pay for your purchase via the Square terminal.</Typography>
        <Looks4 sx={{transform: 'scale(3)', width:'100%', padding:'60px 0 50px'}}/>
        <Typography variant='body1' align='center'>Collect your purchase from the collection bay at the bottom left-hand side of the machine.</Typography>
        <Typography variant='body2' fontStyle='italic' marginTop='auto'>*Discounts must be used at time of achievement and cannot be saved for use at a later time.</Typography>
      </Box>
    );
  }
  
  export default Info;
  