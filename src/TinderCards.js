import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import SwipeButtons from "./SwipeButtons";
import "./TinderCard.css";

function TinderCards() {
  const [people, setPeople] = useState([]);
  const [removingName, setRemovingName] = useState("");

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  const swipe = (direction, personName) => {
    setRemovingName(personName); // Mark the card for removal
    setTimeout(() => {
      // Remove the card after the transition
      setPeople(people.filter(person => person.name !== personName));
      setRemovingName(""); // Reset the removing state
    }, 400); // Assuming the transition duration is 400ms
  };

  return (
    <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <React.Fragment key={person.name}>
          <TinderCard
            className={`swipe ${removingName === person.name ? "removing" : ""}`}
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swipe(dir, person.name)}
          >
            <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              ></div>
              <div className="desc">
                <h4>
                  {person.name}, {person.age} {" "}
                  <span className={`status ${person.status === 'Online' ? 'online' : ''}`}>
  • {person.status}
</span>
                </h4>
                <h3>{person.desc}</h3>
                <div className="hobby__Container">
                  {Array.isArray(person.hobby) ? (
                    person.hobby.map((hobby) => (
                      <span className="hobby">{hobby}</span>
                    ))
                  ) : (
                    <span className="hobby">{person.hobby}</span>
                  )}
                </div>
              </div>
          </TinderCard>
          <SwipeButtons user={person} onSwipe={(dir) => swipe(dir, person.name)} />
        </React.Fragment>
      ))}
    </div>
  );
}
export default TinderCards;

