import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

// Only have one available product to be dispensed
function Dispense() {
  const [msg, setMsg] = React.useState("Processing ...")

  // Update the stock information on load
  React.useEffect(() => {
    updateStock();
    setMsg("Your purchase is being dispensed ...");
  },[])

  const updateStock = async () => {
    const data = await (
      await fetch(
        'https://api.thingspeak.com/channels/2054532/fields/1.json?api_key=URJ48FP988JY69ZE', {method: 'GET'}
      )
    ).json()

    const currStock = data.feeds[data.feeds.length - 1].field1;
    
    // Update stock
    const response = await (
      fetch(`https://api.thingspeak.com/update?api_key=5JCSX2LYQ22HMEBG&field1=${currStock-1}`)
    )
    // Alert if update not successful
    if (response.status !== 200) {
      alert("Could not update stock information. Please retry.")
    }
  }

  let navigate = useNavigate();

  const routeToThanks = () => {
    let path = `../Thanks`
    navigate(path);
  }

  setTimeout(routeToThanks, 10000);

    return (
      <Grid container justifyContent='center'>
        <img
          src={require('../Assets/machine-collect.png')}
          alt='Indicate collection on machine'
          width='60%'
          style={{
            margin: '160px'
          }}
        />
        <Typography variant='h2' mt={10} mb={70}>{msg}</Typography>
        <Grid item xs={12} container alignItems='center'>
          <Grid item xs={3}>
            <ArrowBackRoundedIcon
              sx={(theme) => ({
                transform: 'scale(10)',
                color: theme.palette.green.main,
                marginLeft: '100px',
              })}
            />
          </Grid>
          <Grid item xs={9}><Typography variant='h3'>Please collect your item from the collection slot.</Typography></Grid>
        </Grid>
      </Grid>
    );
  }
  
  export default Dispense;
  