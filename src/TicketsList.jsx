import React, { Component } from 'react';
import Ticket from './Ticket';

class TicketsList extends Component {

    onChangeStatus = (id, status) => {
        this.props.moveTicket({
            'id': id,
            'status': status
        });
    }

    componentDidUpdate() {
        const { tickets } = this.props;
        tickets.forEach(ticket=> {
        if(ticket.status === 'DONE') {
            return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve();
            },2000);
            }).then(() => {
                if (ticket.status === 'DONE') this.onChangeStatus(ticket.id, 'CLOSE');
            });
        }
        });
    }

    render() {
        const { tickets } = this.props;
        const styles = {
            container: {
                display: "flex"
            },
            box: {
                flex: "0 1 33%",
                textAlign: "center",
                label: {
                fontWeight: 600
                }
            }
        };
        const todos = tickets.filter(t => t.status === 'TODO');
        const done = tickets.filter(t => t.status === 'DONE');
        const close = tickets.filter(t => t.status === 'CLOSE');
        return (
            <div style={styles.container}>
                <div style={styles.box}>
                    <label style={styles.box.label}>IN-PROGRESS</label>
                    {todos.map(ticket => <Ticket key={ticket.id} onChangeStatus={this.onChangeStatus} {...ticket}/>)}
                </div> 
                <div style={styles.box}>
                    <label style={styles.box.label}>DONE</label>
                    {done.map(ticket => <Ticket key={ticket.id} onChangeStatus={this.onChangeStatus} {...ticket}/>)}
                </div>
                <div style={styles.box}>
                    <label style={styles.box.label}>CLOSE</label>
                    {close.map(ticket => <Ticket key={ticket.id} onChangeStatus={this.onChangeStatus} {...ticket}/>)}
                </div>
            </div>
            )
    }

}

export default TicketsList;