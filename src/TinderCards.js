import React from "react";
import { useState } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import { useEffect } from "react";
import database from "./firebase";
import SwipeButtons from "./SwipeButtons";

function TinderCards() {
  const [people, setPeople] = useState([]);

  // piece of code which run based on condition
  useEffect(() => {
    const Unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      Unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <>
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              ></div>
              <div className="desc">
                <h4>
                  {person.name}, {person.age},{" "}
                  <span className="status"> • {person.status}</span>
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
            <SwipeButtons user={person.name} />
          </>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
