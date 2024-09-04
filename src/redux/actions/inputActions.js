// Action to set the name value in Redux
export const setName = (name) => {
    return {
        type: 'SET_NAME',
        payload: name,
    };
};

// Action to set the message value in Redux
export const setMessage = (message) => {
    return {
        type: 'SET_MESSAGE',
        payload: message,
    };
};

// Action to emit socket events
export const emitSocketEvents = (socket, name, message) => {
    return () => {
        if (name) {
            socket.emit('new-user-joined', name); // Updated event name from 'new-user-joined' to 'userJoined'
        }
        if (message) {
            socket.emit('message-send', message); // Updated event name from 'message-send' to 'sendMessage'
        }
    };
};
