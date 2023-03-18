import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function Payment() {
  let navigate = useNavigate();

  React.useEffect(() => {
    const routeToDispense = () => {
      navigate(`../Dispense`);
    }

    window.addEventListener('mousedown', routeToDispense);

    return () => {
      window.removeEventListener('mousedown', routeToDispense);
    }
  }, [navigate]);

  return (
    <>
      <ArrowUpwardRoundedIcon
        sx={(theme) => ({
          transform: 'scale(15)',
          color: theme.palette.green.main,
          marginLeft: '800px',
          marginTop: '140px'
        })}
      />
      <Typography variant='h2' m={12} mt={24}>Please complete your transaction on the terminal above.</Typography>
      <img
        width='70%'
        style={{margin: '20px 160px'}}
        src={require('../Assets/payment.png')}
        alt='Payment device'
      />
    </>
  );
}

export default Payment;
  