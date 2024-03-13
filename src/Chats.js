import React from 'react';
import Chat from './Chat';
import './Chats.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Chats() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    return (
        <div className = "chats">
            <Chat
                name = "Rini"
                message = "Co słychać ;)"
                timestamp = "Dostępna 45 minut temu"
                onClick={() => {handleOpenModal(); console.log('test')}}
                profilePic = "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            />

            <Chat
                name = "Priya"
                message = "Cześć..."
                timestamp = " Dostępna godzinę temu"
                onClick={handleOpenModal}
                profilePic = "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <Chat
                name = "Priya"
                message = "Cześć..."
                timestamp = " Dostępna godzinę temu"
                onClick={handleOpenModal}
                profilePic = "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <Chat
                name = "Priya"
                message = "Cześć..."
                timestamp = " Dostępna godzinę temu"
                onClick={handleOpenModal}
                profilePic = "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />

            <Chat
                name = "Mikasha"
                message = "Ciężki dzień w pracy :("
                timestamp = "Dostępna 30 minut temu"
                profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                onClick={handleOpenModal}
            />

            <Chat
                name = "Kaneki"
                message = "Co tam wariacie?"
                timestamp = "Dostępny 4 godziny temu"
                profilePic = "https://i.pinimg.com/736x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg"
                onClick={handleOpenModal}
            />

            <Chat
                name = "Cat Man"
                message = "wyluzuj ;)"
                timestamp = "Dostępny 1 dzień temu"
                profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZTtK6pHqjvMrFvkwyTP_WgXYLrSAdna_8w&usqp=CAU"
                onClick={handleOpenModal}
            />
            <button className="more-users-btn" onClick={handleOpenModal}>Więcej użytkowników</button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <p>Funkcja czatu dostępna tylko dla zalogowanych użytkowników.</p>
                        <a href="https://google.com"><button className="more-users-btn2">Rejestracja</button></a>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default Chats
