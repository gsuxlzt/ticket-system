import React, { Component } from "react";

const styles = {
  ticket: {
    background: "#eee",
    borderRadius: "3px",
    minHeight: "7em",
    padding: "0.5em",
    margin: "0.5em",
    fontWeight: "normal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};

class Ticket extends Component {
  render() {
    const { id, desc, status, onChangeStatus } = this.props;
    return (
      <div style={styles.ticket}>
        <div>{desc}</div>
        <div style={{visibility: status === 'CLOSE' ? 'hidden' : 'visible'}}>
          <button value="done" style={{display: status === 'DONE' ? 'none' : 'inline-block'}} onClick={e=> onChangeStatus(id,'DONE')}>Done</button>
          &nbsp;
          <button value="todo" style={{display: status === 'TODO' ? 'none' : 'inline-block'}} onClick={e=> onChangeStatus(id, 'TODO')}>Not Fix</button>
          &nbsp;
          <button value="close"  onClick={e => this.props.onChangeStatus(id, 'CLOSE')}>Close</button>
        </div>
      </div>
    );
  }
}

export default Ticket;
