import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useState } from 'react';

function Header({ backButton }) {
    const history = useHistory();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon onClick={handleOpenModal} className="header__icon" fontSize="large" />
                </IconButton>
            )}

            <Link to="/">
                <img
                    className="header__logo"
                    src="/love-svgrepo-com.svg"
                    alt="tinder logo"
                />
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
            {isModalOpen && (
                <div className={`modal ${isModalOpen ? 'show' : ''}`}>
                    <div className={`modal-content ${isModalOpen ? 'show' : ''}`}>
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <p>Funkcja czatu dostępna tylko dla zalogowanych użytkowników.</p>
                        <a href="https://google.com">
                            <button className="more-users-btn2">Rejestracja</button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header