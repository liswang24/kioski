import * as React from 'react';
import { Box, Button, Grid, Modal, Typography } from "@mui/material";

function ConfirmModal(props) {

    return (
      <Modal
        open={props.open}
        >
        <Box
          p={6}
          pt={10}
          pb={10}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems='center'
          sx={{
            backgroundColor: 'white',
            border: 'solid black ',
            borderRadius: '25px',
            margin: '400px auto',
            width: '600px'
          }}
        >
          <img 
            src={require('../Assets/Game/dino.png')}
            alt="Dinosaur"
            style={{width: '200px'}}
          />
          <Typography variant='h3' width="100%" mt={4}>Are you sure?</Typography>
          <Typography mt={2}>Cancelling will remove any discounts you have acquired.</Typography>
          <Grid container mt={4} spacing={4} justifyContent='center'>
            <Grid item>
              <Button 
                size='medium' 
                onClick={props.handleClose}
                sx={(theme) => ({
                  color: 'black',
                  backgroundColor: theme.palette.green.main,
                })}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item><Button size='medium' onClick={props.confirmAction}>Yes, abandon discount.</Button></Grid>
          </Grid>
        </Box>
      </Modal>
    );
  }
  
  export default ConfirmModal;
  