import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// Only have one available product to be dispensed
function Dispense() {
  const [msg, setMsg] = React.useState("Processing ...")

  // Update the stock information on load
  React.useEffect(() => {
    updateStock();
    setMsg("Dispensing Items...");
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
      <>
        <p>{msg}</p>
        <p>Collect below</p>
      </>
    );
  }
  
  export default Dispense;
  