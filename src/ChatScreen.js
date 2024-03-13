import React from 'react';
import './ChatScreen.css';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom';


function ChatScreen() {
    const location = useLocation();
    const userState = location.state?.user;
    console.log(userState);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: `${userState?.name}`,
            image: `${userState?.url}`,
            message: "Co słychać?",
        },
        {
            name: `${userState?.name}`,
            image: `${userState?.url}`,
            message: "Co słychać?",
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }

    return (
        <div className = "chatScreen">
            <p className="chatScreen__timestamp">POŁĄCZONO Z UŻYTKOWNIKIEM {(userState?.name).toUpperCase()} W DNIU {getDate().toUpperCase()}</p>
            {messages.map((message) => (
                message.name ? (
                    <div className = "chatScreen__message">
                        <Avatar
                            className = "chatScreen__image"
                            alt = {message.name}
                            src = {message.image}
                        />
                        <p className = "chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className = "chatScreen__message">
                        <p className = "chatScreen__textUser">{message.message}</p>
                    </div>
                )                
            ))}
             
            <form className = "chatScreen__input">
                <input
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    className = "chatScreen__inputField" 
                    placeholder = "Napisz wiadomość" 
                    type = "text" />
                <button onClick = {handleSend} type = "submit" className = "chatScreen__inputButton">Wyślij</button>
            </form>
            
        </div>
    )
}

export default ChatScreen
