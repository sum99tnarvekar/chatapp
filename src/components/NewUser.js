import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, emitSocketEvents } from '../redux/actions/inputActions';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000')

export default function NewUser(){
    const dispatch = useDispatch();
    const name = useSelector((state) => state.input.name);
    const [localName, setLocalName] = useState(name);

    const handleNameChange = (e) => {
        setLocalName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setName(localName)); // Update the Redux store with the new name
        dispatch(emitSocketEvents(socket, localName, '')); // Emit the name to the server; message is an empty string here
        setLocalName(''); // Optionally reset the name input
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={localName}
                onChange={handleNameChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
