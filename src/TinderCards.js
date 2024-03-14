import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import SwipeButtons from "./SwipeButtons";
import "./TinderCard.css";
import { useLocation } from "react-router-dom";

function TinderCards() {
  const [people, setPeople] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [removingName, setRemovingName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
      let sortedPeople = snapshot.docs.map((doc) => doc.data());

      // Extract the user's name from the pathname
      const pathSegments = location.pathname.split("/");
      const userName =
        pathSegments.length > 1 ? pathSegments[1].toLowerCase() : null;

      // If userName exists in the URL, sort the array to have this person first
      if (userName) {
        sortedPeople = sortedPeople.sort((a, b) => {
          const aName = a.name.toLowerCase();
          const bName = b.name.toLowerCase();

          if (aName === userName) return -1;
          if (bName === userName) return 1;
          return 0;
        });

        // Find the index of the user in the sorted array
        const userIndex = sortedPeople.findIndex(
          (person) => person.name.toLowerCase() === userName
        );

        // Set the currentIndex to the user's index
        setCurrentIndex(userIndex);
      }

      console.log(sortedPeople);
      setPeople(sortedPeople);
    });

    return () => {
      unsubscribe();
    };
  }, [location.pathname]);

  const swipe = (direction, personName) => {
    setRemovingName(personName); // Mark the card for removal

    // Delay before rendering the next card
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 300); // Delay of 1 second (1000 milliseconds)
  };

  const currentPerson = people[currentIndex];

  return (
    <div className="tinderCards__cardContainer">
      {currentPerson && (
        <React.Fragment key={currentPerson.name}>
          <TinderCard
            className={`swipe ${
              removingName === currentPerson.name ? "removing" : ""
            }`}
            key={currentPerson.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swipe(dir, currentPerson.name)}
          >
            <div
              style={{ backgroundImage: `url(${currentPerson.url})` }}
              className="card"
            ></div>
            <div className="desc">
              <h4>
                {currentPerson.name}, {currentPerson.age}{" "}
                <span
                  className={`status ${
                    currentPerson.status === "Online" ? "online" : ""
                  }`}
                >
                  • {currentPerson.status}
                </span>
              </h4>
              <h3>{currentPerson.desc}</h3>
              <div className="hobby__Container">
                {Array.isArray(currentPerson.hobby) ? (
                  currentPerson.hobby.map((hobby) => (
                    <span className="hobby">{hobby}</span>
                  ))
                ) : (
                  <span className="hobby">{currentPerson.hobby}</span>
                )}
              </div>
            </div>
          </TinderCard>
          <SwipeButtons
            user={currentPerson}
            onSwipe={(dir) => swipe(dir, currentPerson.name)}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default TinderCards;
