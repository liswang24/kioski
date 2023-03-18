import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Thanks() {
  let navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [navigate])

  return (
    <>
        <h1>Thanks</h1>
    </>
  );
}

export default Thanks;
  