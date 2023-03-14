import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Thanks() {
  let navigate = useNavigate();

  const routeToHome = () => {
    let path = `/`
    navigate(path);
  }

  setTimeout(routeToHome, 5000);

  return (
    <>
        <h1>Thanks</h1>
    </>
  );
}

export default Thanks;
  