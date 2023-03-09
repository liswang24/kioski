import * as React from 'react';
import { Box, Button, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ConfirmModal(props) {
  let navigate = useNavigate();
  const routeToHome = () => {
    let path = `/`;
    navigate(path);
  }

    return (
      <Modal
        open={props.open}
        onClose={props.handleClose}
        >
        <Box>
          {/* TODO: ADD X button */}
          {/* <Button endIcon={CloseRoundedIcon} onClick={props.handleClose}>why</Button> */}
          <p>Are you sure? Returning will remove any discounts your have aquired.</p>
          <Button onClick={routeToHome}>Yes, abandon discount.</Button>
        </Box>
      </Modal>
    );
  }
  
  export default ConfirmModal;
  