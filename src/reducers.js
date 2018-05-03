import {combineReducers } from 'redux';
import { ADD_TICKET, MOVE_TICKET } from './actions';

const tickets = (state = [], action) => {
    switch (action.type) {
        case ADD_TICKET:
            return [...state, action.ticket];
        case MOVE_TICKET:
            return state.map(ticket => {
                if (ticket.id === action.ticket.id) ticket.status = action.ticket.status;
                return ticket;
            });
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    tickets
});

export default rootReducer;