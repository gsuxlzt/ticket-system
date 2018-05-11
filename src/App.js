import React from "react";
import AddTicketContainer from './containers/AddTicketContainer';
import TicketsContainer from "./containers/TicketsContainer.js";

const App = (props) => {
  return (
    <div>
        <AddTicketContainer/>
      <br />
      <br />
      <TicketsContainer/>
    </div>
  )
}


export default App;
