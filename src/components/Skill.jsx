import React from "react";
import uuid from "react-uuid";
import Rating from "react-rating";
import { CListGroupItem, CRow, CCol } from "@coreui/react";

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
    <>
      {skills.map((skill) => {
        return (
          <CListGroupItem action key={uuid()}>
            <CRow>
              <CCol>
                <h6>{skill.name}</h6>
              </CCol>
              <CCol>
                <Rating
                  emptySymbol={
                    <img
                      src="/images/magic-wand-empty.png"
                      className="icon ml-2"
                      alt="empty skill rating icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src="/images/magic-wand-full.png"
                      className="icon ml-2"
                      alt="full skill rating icon"
                    />
                  }
                  initialRating={skill.level}
                />
              </CCol>
            </CRow>
          </CListGroupItem>
        );
      })}
    </>
  );
};

export default Skill;
