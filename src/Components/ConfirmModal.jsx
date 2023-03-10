import * as React from 'react';
import { Box, Button, Modal } from "@mui/material";

function ConfirmModal(props) {

    return (
      <Modal
        open={props.open}
        // onClose={props.handleClose}
        >
        <Box>
          {/* TODO: Pass in custom messages */}
          {/* TODO: ADD X button */}
          {/* <Button endIcon={CloseRoundedIcon} onClick={props.handleClose}>why</Button> */}
          <p>Are you sure? Returning will remove any discounts your have aquired.</p>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.confirmAction}>Yes, abandon discount.</Button>
        </Box>
      </Modal>
    );
  }
  
  export default ConfirmModal;
  