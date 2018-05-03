import { connect } from 'react-redux';
import  { moveTicket } from './../actions.js';
import TicketsList from './../TicketsList';

const mapStateToProps = (state) => ({
    tickets: state.tickets
});

const mapDispatchToProps = (dispatch) => ({
    moveTicket: (newStatus) => {
        dispatch(moveTicket(newStatus));
    }
})

const TicketsContainer = connect(mapStateToProps, mapDispatchToProps)(TicketsList);

export default TicketsContainer;