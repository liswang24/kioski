import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  let navigate = useNavigate();

  const routeToDispense = () => {
    navigate(`../Dispense`);
  }

  // On click, simulate successful payment
  document.addEventListener('mousedown', () => {
    routeToDispense();
  })

  return (
      <h1>Prompt Payment Here</h1>
  );
}

export default Payment;
  