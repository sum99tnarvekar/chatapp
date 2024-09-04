import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Navbar from './components/Navbar';
import Chatbox from './components/Chatbox';
import NewUser from "./components/NewUser";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <Chatbox />
                <NewUser />
            </div>
        </Provider>
    );
}

export default App;
