import React from "react";
import { v4 as uuidv4 } from "uuid";
import Rating from "react-rating"

const skills = [
  {
    name: "Potion making",
    level: 3,
  },
  {
    name: "Spells",
    level: 4,
  },
  {
    name: "Quidditch",
    level: 5,
  },
  {
    name: "Animagus",
    level: 3,
  },
  {
    name: "Apparate",
    level: 4,
  },
  {
    name: "Metamorphmagi",
    level: 2,
  },
  {
    name: "Parseltongue",
    level: 3,
  },
];


const Skill = () => {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <div key={uuidv4()}>
            <h6>{skill.name}</h6>
            <Rating
              emptySymbol={
                <img
                  src="/images/magic-wand-empty.png"
                  className="icon"
                  alt="empty skill rating icon"
                />
              }
              fullSymbol={
                <img
                  src="/images/magic-wand-full.png"
                  className="icon"
                  alt="full skill rating icon"
                />
              }
              initialRating={skill.level}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
