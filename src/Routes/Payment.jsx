import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  let navigate = useNavigate();

  // On click, simulate successful payment
  window.addEventListener('click', (event) => {
    navigate(`../Dispense`)
  })

  return (
      <h1>Prompt Payment Here</h1>
  );
}

export default Payment;
  