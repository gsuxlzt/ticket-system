import  { addTicket } from './../actions.js';
import { connect } from 'react-redux';
import AddTicket from './../AddTicket';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addTicket: (ticket) => {
        dispatch(addTicket(ticket));
    }
});

const AddTicketContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTicket);

export default AddTicketContainer;
