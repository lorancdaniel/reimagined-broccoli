import React, { useState } from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
import { Message } from "@material-ui/icons";
import { Link } from 'react-router-dom';

function SwipeButtons({user, onSwipe}) {
  // State to control the visibility of the SwipeButtons component
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle click event on IconButtons
  const handleButtonClick = () => {
    setIsVisible(false); // Set the visibility to false
  };

  // Conditionally render the SwipeButtons component based on `isVisible` state
  if (!isVisible) {
    return null; // Do not render anything if isVisible is false
  }

  const child = user;
  console.log(child)

  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__left" onClick={() => {
        handleButtonClick();
        onSwipe('left');
      }}>
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipeButtons__right" onClick={() => {
        handleButtonClick();
        onSwipe('right');
      }}>
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton component={Link} to={{pathname:`/chat/${user.name}`, state: {user: child}
    }} className="swipeButtons__lightning" onClick={handleButtonClick}>
        <Message fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;