import React from 'react';
import './ChatScreen.css';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

function ChatScreen() {
    const location = useLocation();
    const userState = location.state?.user;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    console.log(userState);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: `${userState?.name}`,
            image: `${userState?.url}`,
            message: `${userState?.firstMsg}`,
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        if (input.trim() !== '') {
            setMessages([...messages, { message: input }]);
            setInput("");
        }
    };

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">POŁĄCZONO Z UŻYTKOWNIKIEM {(userState?.name).toUpperCase()} W DNIU {getDate().toUpperCase()}</p>
            {messages.map((message, index) => (
                message.name ? (
                    <div key={index} className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div key={index} className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}

            <form className="chatScreen__input" onSubmit={handleSend}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Napisz wiadomość"
                    type="text"
                />
                <button className="chatScreen__inputButton" onClick={handleOpenModal}>
                    Wyślij
                </button>
            </form>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <p>Funkcja czatu dostępna tylko dla zalogowanych użytkowników.</p>
                        <a href="https://google.com">
                            <button className="more-users-btn2">Rejestracja</button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatScreen;