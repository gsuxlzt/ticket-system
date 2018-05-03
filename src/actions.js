export const ADD_TICKET = "ADD_TICKET";
export const MOVE_TICKET = "MOVE_TICKET";

export const addTicket = ticket => {
    return {
        type: ADD_TICKET,
        ticket
    }
}

export const moveTicket = newStatus => {
    return {
        type: MOVE_TICKET,
        ticket: {
            id: newStatus.id,
            status: newStatus.status
        }
    }
}