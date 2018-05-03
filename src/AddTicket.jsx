import React, { Component } from 'react';
let id = 0;
class AddTicket extends Component {
    state = {
            btnText: 'Add'
    }

    onTicketSubmit = () => {
        if (!this.input.value) return;

        this.setState({btnText: '...'});

        new Promise((resolve,reject) => {
            return setTimeout(()=>{
                resolve();
            }, 1500);
        }).then(()=>{
            this.props.addTicket({
                id: id++,
                desc: this.input.value,
                status: 'TODO'
            });
            this.input.value = '';
            this.setState({btnText: 'Add'});
        })
    }

    render() {
        const { btnText } = this.state;       
        return (
            <div>
                <input 
                    type="text"
                    style={{ borderRadius: "3px" }}
                    ref={node => this.input = node}
                />
                &nbsp;
                <button 
                    style={{ cursor: "pointer" }} 
                    onClick={(e)=> {e.preventDefault(); this.onTicketSubmit()}}
                    disabled={btnText === '...'}>
                    {btnText}
                </button>
            </div>
        );
    }
}

export default AddTicket;