import React, { Component } from "react";
import AddTicketContainer from './containers/AddTicketContainer';
import TicketsContainer from "./containers/TicketsContainer.js";

class App extends Component {

  handleChange(e) {
    const term = e.target.value;
    console.log(e.target.id);
    this.setState({term});
    console.log(this.state.term);

  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
          <AddTicketContainer/>
        <br />
        <br />
        <TicketsContainer/>
     </div>
    );
  }
}

export default App;
