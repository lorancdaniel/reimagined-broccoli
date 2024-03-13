import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chat.css';

function chat({ name, message, timestamp, profilePic, onClick }) {
    return (
        <div>
            <div className = "chat" onClick={onClick}>
                <Avatar className = "chat__image" src = {profilePic}  />
                <div className = "chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className = "chat__timestamp">{timestamp}</p>
            </div>
        </div>
    )
}

export default chat
